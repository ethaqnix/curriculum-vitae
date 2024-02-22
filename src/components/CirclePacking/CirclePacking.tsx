import React, { useEffect, useRef } from 'react'
import styles from './CirclePacking.module.scss'
import * as d3 from 'd3'

export interface D3Object {
    name: string
    children?: D3Object[]
}

interface CirclePackingProps {
    data: D3Object
    skillId: string
}

const CirclePacking = ({ data, skillId }: CirclePackingProps) => {
    console.log(data)

    const graphRef = useRef(null)
    const containerRef = useRef(null)

    const [height, setHeight] = React.useState(0)

    const getElementHeigth = React.useCallback((ref) => {
        if (ref.current) setHeight((ref.current as any).clientHeight)
    }, [])

    React.useEffect(() => {
        getElementHeigth(containerRef)
    }, [containerRef])

    const depthCount = (branch: D3Object): number => {
        if (!branch.children) {
            return 1
        }
        return 1 + d3.max(branch.children.map(depthCount))
    }

    useEffect(() => {
        if (!height) return
        const svg = d3.select(graphRef.current)
        d3.selectAll('svg > *').remove()

        const margin = 10
        const diameter = height
        let g = svg
            .append('g')
            .attr(
                'transform',
                'translate(' + diameter / 2 + ',' + diameter / 2 + ')'
            )

        const color = d3
            .scaleLinear()
            .domain([0, 5])
            .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
            .interpolate(d3.interpolateHcl)

        const pack = d3
            .pack()
            .size([diameter - margin, diameter - margin])
            .padding(2)

        let config: any = {}

        config.rootSource = data
        config.root = data
        let nodes
        let focus
        let view
        let circle
        let transition

        const buildGraph = () => {
            config.root = d3
                .hierarchy(config.root)
                .sum(function (d) {
                    return 1000
                })
                .sort(function (a: { value: number }, b: { value: number }) {
                    return b.value - a.value
                })

            const focus = config.root
            nodes = pack(config.root).descendants()

            circle = g
                .selectAll('circle')
                .data(nodes, function (d, i) {
                    return d.data.name
                })
                .enter()
                .append('circle')
                .attr('class', function (d, i) {
                    return d.parent
                        ? d.children
                            ? 'node ' + d.data.name + ' i-' + i
                            : 'node--leaf node ' + d.data.name + ' i-' + i
                        : 'node--root ' + d.data.name + ' i-' + i
                })
                .style('fill', function (d) {
                    console.log(d.depth)
                    if (!d.depth) return 'none'
                    return d.children ? color(d.depth) : 'white'
                })
                .style('padding', '4px')
                .on('click', function (event, d) {
                    if (focus !== d) zoom(d), event.stopPropagation()
                })

            const text = g
                .selectAll('text')
                .data(nodes, function (d, i) {
                    return d.data.name
                })
                .enter()
                .append('text')
                .style('text-anchor', 'middle')
                .style('pointer-events', 'none')
                .style('fill-opacity', function (d) {
                    return d.parent === config.root ? 1 : 0
                })
                .style('display', function (d) {
                    return d.parent === config.root ? 'inline' : 'none'
                })
                .text(function (d) {
                    return d.data.name
                })

            const node = g.selectAll('circle,text')

            svg.on('click', function () {
                zoom(config.root)
            })

            const zoomTo = (v) => {
                const k = diameter / v[2]
                view = v

                node.attr('transform', function (d) {
                    return (
                        'translate(' +
                        (d.x - v[0]) * k +
                        ',' +
                        (d.y - v[1]) * k +
                        ')'
                    )
                })

                circle.attr('r', function (d) {
                    return d.r * k
                })
            }

            const zoom = (d) => {
                const focus = d

                transition = d3
                    .transition()
                    //.duration(d3.event.altKey ? 7500 : 750)
                    .tween('zoom', function (d) {
                        const i = d3.interpolateZoom(view, [
                            focus.x,
                            focus.y,
                            focus.r * 2 + margin,
                        ])
                        return function (t) {
                            zoomTo(i(t))
                        }
                    })

                transition
                    .selectAll('text')
                    .filter(function (d) {
                        return (
                            d.parent === focus ||
                            this.style.display === 'inline'
                        )
                    })
                    .style('fill-opacity', function (d) {
                        return d.parent === focus ? 1 : 0
                    })
                    .on('start', function (d) {
                        if (d.parent === focus) this.style.display = 'inline'
                    })
                    .on('end', function (d) {
                        if (d.parent !== focus) this.style.display = 'none'
                    })
            }

            zoomTo([config.root.x, config.root.y, config.root.r * 2 + margin])
        }

        buildGraph()
    }, [height, skillId])

    const style = `
    .node {
        cursor: pointer;
    }
    
    .node:hover {
        stroke: #000;
        stroke-width: 1.5px;
    }
    
    .node--leaf {
        fill: white;
    }
    
    .label {
        font: 11px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        text-anchor: middle;
        text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff;
    }
    
    .label,
    .node--root,
    .node--leaf {
        pointer-events: none;
    }`
    return (
        <div className={styles.root} ref={containerRef}>
            <style>{style}</style>
            <svg
                height={height}
                width={height}
                className={styles.svg}
                ref={graphRef}
            ></svg>
        </div>
    )
}

export default CirclePacking

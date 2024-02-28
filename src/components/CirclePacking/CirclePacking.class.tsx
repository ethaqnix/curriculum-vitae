import * as React from 'react'
import styles from './CirclePacking.module.scss'

import * as d3 from 'd3'

/* great use of typescript on this file */

export interface D3Object {
    name: string
    children?: D3Object[]
    size?: number
}

interface CirclePackingProps {
    data: D3Object
    skillId?: string
}

interface CirclePackingState {
    height?: number
}

class CirclePacking extends React.Component<
    CirclePackingProps,
    CirclePackingState
> {
    svg: any
    graphRef: SVGSVGElement | undefined
    containerRef: HTMLDivElement | undefined
    config: any = {}
    focus: any
    color = d3
        .scaleLinear()
        .domain([0, 5])
        .range(['hsl(37, 10%, 20%)', 'hsl(37, 12%, 80%)'] as any)
        .interpolate(d3.interpolateHcl as any)
    nodes: any
    node: any
    rootView: any
    view: any
    circle: any
    text: any
    pack: any
    transition: any
    state = {
        height: 0,
    }

    constructor(props: CirclePackingProps) {
        super(props)
    }

    componentDidMount() {}

    componentDidUpdate(prevProps: Readonly<CirclePackingProps>): void {
        if (prevProps.skillId !== this.props.skillId) {
            this.updateChart(this.props.data)
        }
    }

    initGraph(element: HTMLElement) {
        if (!element) return
        this.setState({ height: element.clientHeight }, () => {
            this.initChartData()
        })
    }

    initChartData() {
        if (!this.state.height || !this.graphRef) return
        const svg = d3.select(this.graphRef)

        const diameter = this.state.height
        this.svg = svg
            .append('g')
            .attr(
                'transform',
                'translate(' + diameter / 2 + ',' + diameter / 2 + ')'
            )
        svg.on('click', () => {
            this.zoom(this.config.root)
        })
        this.pack = d3.pack().size([diameter, diameter])
        this.config.rootSource = this.props.data // for animation
        this.config.root = this.config.rootSource
        this.buildChart(this.props.data)
    }

    buildChart(dataSet: any) {
        this.config.root = d3
            .hierarchy(dataSet)
            .sum(function (d: any) {
                return d.size
            })
            .sort(function (a: any, b: any) {
                return b.value - a.value
            })

        this.focus = this.config.root
        this.nodes = this.pack(this.config.root).descendants()

        this.circle = this.svg
            .selectAll('circle')
            .data(this.nodes, function (d: { data: { name: any } }) {
                return d.data.name
            })
            .enter()
            .append('circle')
            .on(
                'click',
                (event: { stopPropagation: () => any }, d: () => void) => {
                    if (focus !== d) this.zoom(d), event.stopPropagation()
                }
            )
        this.circle
            .attr(
                'class',
                function (
                    d: { parent: any; children: any; data: { name: string } },
                    i: string
                ) {
                    return d.parent
                        ? d.children
                            ? 'node ' + d.data.name + ' i-' + i
                            : 'node--leaf node ' + d.data.name + ' i-' + i
                        : 'node--root ' + d.data.name + ' i-' + i
                }
            )
            .style('fill', (d: any) => {
                return d.children ? this.color(d.depth) : 'white'
            })
        //.style('padding', (d: any) => (d.data.size ? '4px' : '0px'))

        this.text = this.svg
            .selectAll('text')
            .data(this.nodes, function (d: any) {
                return d.data.name
            })
            .enter()
            .append('text')
        this.text
            .style('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .style('font-weight', (d: any) => {
                return d.data.children ? '700' : undefined
            })
            .style('fill-opacity', (d: any) => {
                return d.parent === this.config.root && d.data.size ? 1 : 0
            })
            .style('display', (d: any) => {
                return d.parent === this.config.root && d.data.size
                    ? 'inline'
                    : 'none'
            })
            .text(function (d: any) {
                return d.data.name
            })

        this.node = this.svg.selectAll('circle,text')

        this.rootView = [
            this.config.root.x,
            this.config.root.y,
            this.config.root.r * 2,
        ]
        this.zoomTo(this.rootView)
    }

    updateChart(dataSet: any) {
        this.config.root = d3
            .hierarchy(dataSet)
            .sum(function (d: any) {
                return d.size
            })
            .sort(function (a: any, b: any) {
                return b.value - a.value
            })

        this.zoomTo(this.rootView)

        this.focus = this.config.root
        this.nodes = this.pack(this.config.root).descendants()

        this.text = this.svg
            .selectAll('text')
            .data(this.nodes, function (d: { data: { name: any } }, i: any) {
                return d.data.name
            })

        this.circle = this.svg
            .selectAll('circle')
            .data(this.nodes, function (d: { data: { name: any } }, i: any) {
                return d.data.name
            })

        this.node = this.svg.selectAll('circle,text')

        const k = this.state.height / this.view[2]

        this.node
            .transition()
            .duration(1250)
            .attr('transform', (d: any) => {
                return (
                    'translate(' +
                    (d.x - this.view[0]) * k +
                    ',' +
                    (d.y - this.view[1]) * k +
                    ')'
                )
            })
            .attr('r', function (d: any) {
                return d.r * k
            })

        const text = this.text.transition().duration(1250)

        this.text = text
            .style('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .style('fill-opacity', (d: any) => {
                return d.parent === this.config.root && d.data.size ? 1 : 0
            })
            .style('display', (d: any) => {
                return d.parent === this.config.root && d.data.size
                    ? 'inline'
                    : 'none'
            })
            .text(function (d: any) {
                return d.data.name
            })
            .attr('transform', (d: any) => {
                return (
                    'translate(' +
                    (d.x - this.view[0]) * k +
                    ',' +
                    (d.y - this.view[1]) * k +
                    ')'
                )
            })
    }

    zoom(d: any) {
        const focus = d

        this.transition = d3
            .transition()
            .duration(750)
            .tween('zoom', () => {
                const i = d3.interpolateZoom(this.view, [
                    focus.x,
                    focus.y,
                    focus.r * 2,
                ])

                return (t: any) => {
                    this.zoomTo(i(t))
                }
            })

        this.transition
            .selectAll('text')
            .filter(function (d: any) {
                // @ts-ignore
                return d.parent === focus || this.style.display === 'inline'
            })
            .style('fill-opacity', function (d: any) {
                return d.parent === focus && d.data.size ? 1 : 0
            })
            .on('start', function (d: any) {
                // @ts-ignore
                if (d.parent === focus) this.style.display = 'inline'
            })
            .on('end', function (d: any) {
                // @ts-ignore
                if (d.parent !== focus) this.style.display = 'none'
            })
    }

    zoomTo(v: [number, number, number]) {
        const k = this.state.height / v[2]
        this.view = v

        this.node.attr('transform', function (d: any) {
            return (
                'translate(' + (d.x - v[0]) * k + ',' + (d.y - v[1]) * k + ')'
            )
        })

        this.circle.attr('r', function (d: any) {
            return d.data.size ? d.r * k : 0
        })
    }

    render() {
        return (
            <div
                className={styles.root}
                ref={(element: HTMLDivElement) => {
                    this.containerRef = element || undefined
                    if (!this.state.height) this.initGraph(element)
                }}
            >
                <style>{style}</style>
                <svg
                    height={this.state.height}
                    width={this.state.height}
                    className={styles.svg}
                    ref={(element: SVGSVGElement) => {
                        this.graphRef = element || undefined
                    }}
                ></svg>
            </div>
        )
    }
}

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
    }
`

export default CirclePacking

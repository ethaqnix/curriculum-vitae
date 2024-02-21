import React, { useEffect, useRef } from 'react'
import styles from './CirclePacking.module.scss'
import * as d3 from 'd3'

export interface D3Object {
    name: string
    children?: D3Object[]
}

interface CirclePackingProps {
    data: D3Object
}

const CirclePacking = ({ data }: CirclePackingProps) => {
    const graphRef = useRef(null)
    const margin = 20,
        padding = 2,
        diameter = 0

    const depthCount = (branch: D3Object): number => {
        if (!branch.children) {
            return 1
        }
        return 1 + d3.max(branch.children.map(depthCount))
    }

    useEffect(() => {
        var color = d3
            .scaleLinear()
            .domain([0, depthCount(data)])
            .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
            .interpolate(d3.interpolateHcl)

        var pack = d3.pack().padding(2).size([20, 500]),
            arc = d3.arc().innerRadius(0),
            pie = d3.layoutPie
        console.log(d3.select(graphRef.current))

        var svg = d3
            .select(graphRef.current)
            .append('svg')
            .attr('width', diameter)
            .attr('height', diameter)
            .append('g')
            .attr(
                'transform',
                'translate(' + diameter / 2 + ',' + diameter / 2 + ')'
            )

        /*var focus = data,
            nodes = pack.nodes(data),
            //nodes = svg.selectAll("g.node")
            //.data(pack.nodes(root)),
            view

        var circle = svg
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('class', function (d) {
                return d.parent
                    ? d.children
                        ? 'node'
                        : 'node node--leaf'
                    : 'node node--root'
            })
            .style('fill', function (d) {
                return d.children ? color(d.depth) : null
            })
        /*.on("click", function(d) {
                    if (focus !== d) zoom(d), d3.event.stopPropagation();
            });*/
    }, [])
    return <div ref={graphRef}></div>
}

export default CirclePacking

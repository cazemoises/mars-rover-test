import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { GridStyles } from './Grid.styles';

interface IData {

    grid: {
        id: number,
        x_limit: number,
        y_limit: number,
        title: string
    },
    rovers: {
        id: number,
        rover_label: string,
        x_pos: number,
        y_pos: number,
        direction: string,
        grid_id: number
    }[]

};

const Grid = (props: IData) => {
    
  const svgRef = useRef(null);

  useEffect(() => {
    let svg = d3.select(svgRef.current);

    const data = props.rovers;
    const grid = props.grid;

    const coefficient = 40;

    const width = grid.x_limit * coefficient;
    const height = grid.y_limit * coefficient;

const verticalLines = svg
  .selectAll('.vertical-line')
  .data(d3.range(coefficient, width + coefficient, coefficient))
  .enter()
  .append('line')
  .attr('x1', (d) => d)
  .attr('y1', 0)
  .attr('x2', (d) => d)
  .attr('y2', height + coefficient)
  .attr('stroke', 'gray')
  .attr('stroke-width', 1)
  .attr('class', 'vertical-line');

const horizontalLines = svg
  .selectAll('.horizontal-line')
  .data(d3.range(coefficient, height + coefficient, coefficient))
  .enter()
  .append('line')
  .attr('x1', 0)
  .attr('y1', (d) => d)
  .attr('x2', width + coefficient)
  .attr('y2', (d) => d)
  .attr('stroke', 'gray')
  .attr('stroke-width', 1)
  .attr('class', 'horizontal-line');

    const circles = svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x_pos === 0 ? coefficient : d.x_pos * coefficient)
      .attr('cy', (d) => d.y_pos === 0 ? coefficient: d.y_pos * coefficient)
      .attr('r', coefficient / 4)
      .attr('fill', '#ff0000')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('cursor', 'pointer')
.on('mouseover', (_event, d) => {
    const text = svg
      .append('text')
      .attr('x', d.x_pos === 0 ? coefficient : d.x_pos * coefficient)
      .attr('y', d.y_pos === 0 ? coefficient / 2 : d.y_pos * coefficient - coefficient / 2)
      .text(`${d.rover_label}`)
      .attr('font-size', '14px')
      .attr('text-anchor', 'middle')
      .attr('fill', '#666');
    d3.select(text.node()).datum(d).attr('class', 'point-text');
  })
  .on('mouseout', (_event, d) => {
    const text = svg.select('.point-text').filter((datum) => datum === d);
    text.remove();
  });
  
  }, [props.rovers]);

  return (
    <GridStyles.Container>
        <GridStyles.Svg ref={svgRef} width={500} height={500}>
        </GridStyles.Svg>
    </GridStyles.Container>
  );
};

export default Grid;
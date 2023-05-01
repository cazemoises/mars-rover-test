import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import MoveRoverForm from '../modals/moveRoverForm/MoveRoverForm';

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

	const [ moveRoverVisible, setMoveRoverVisible ] = useState(false);
	const [ selectedRover, setSelectedRover ] = useState({ id: 0, rover_label: '', x_pos: 0, y_pos: 0, direction: '', grid_id: 0 });

	const handleMoveRoverVisible = () => {
	setMoveRoverVisible(!moveRoverVisible);
	}

	useEffect(() => {
	let svg = d3.select(svgRef.current);

	const { rovers, grid } = props; 

	// Calculate dimensions based on grid limits
	const coefficient = Math.min(450 / grid.x_limit, 450 / grid.y_limit);
	const width = grid.x_limit * coefficient;
	const height = grid.y_limit * coefficient;

	// Circle styling
	const circleRadius = coefficient / 4;
	const circleStrokeWidth = 1;

	// Vertical grid lines
	const verticalLines = svg
	.selectAll('.vertical-line')
	.data(d3.range(coefficient, width + coefficient, coefficient))
	.enter()
	.append('line')
	.attr('x1', (d) => d)
	.attr('y1', height)
	.attr('x2', (d) => d)
	.attr('y2', coefficient)
	.attr('stroke', 'gray')
	.attr('stroke-width', 1)
	.attr('class', 'vertical-line');

	// Horizontal grid lines
	const horizontalLines = svg
	.selectAll('.horizontal-line')
	.data(d3.range(0, height, coefficient))
	.enter()
	.append('line')
	.attr('x1', coefficient)
	.attr('y1', (d) => height - d)
	.attr('x2', width)
	.attr('y2', (d) => height - d)
	.attr('stroke', 'gray')
	.attr('stroke-width', 1)
	.attr('class', 'horizontal-line');

	// Circles representing rovers
	const circles = svg
	.selectAll('circle')
	.data(rovers)
	.enter()
	.append('circle')
	.attr('cx', (d) => d.x_pos === 0 ? coefficient : d.x_pos * coefficient + coefficient)
	.attr('cy', (d) => d.y_pos === 0 ? height : height - d.y_pos * coefficient)
	.attr('r', Math.max(8, Math.min(200 / grid.x_limit, 200 / grid.y_limit)))
	.attr('fill', '#ff0000')
	.attr('stroke', 'gray')
	.attr('stroke-width', circleStrokeWidth)
	.attr('cursor', 'pointer')
	.on('click', (_event, d) => {
		setSelectedRover(d);
		handleMoveRoverVisible();
	})
	// Show rover label and direction on hover
	.on('mouseover', (_event, d) => {
		const text = svg
		.append('text')
		.attr('x', d.x_pos === 0 ? coefficient : d.x_pos * coefficient + coefficient)
		.attr('y', height - d.y_pos * coefficient - circleRadius - 5)
		.text(`${d.rover_label} - ${d.direction}`)
		.attr('font-size', '14px')
		.attr('text-anchor', 'middle')
		.attr('fill', '#666');
		d3.select(text.node()).datum(d).attr('class', 'point-text');
	})
	// Show rover label and direction on mouse out
	.on('mouseout', (_event, d) => {
		const text = svg.select('.point-text').filter((datum) => datum === d);
		text.remove();
	});


	}, [props.rovers, props.grid]);

	return (
		<GridStyles.Container>
			<GridStyles.Svg ref={svgRef} width={500} height={500}>
			</GridStyles.Svg>
			{
				moveRoverVisible &&
				<MoveRoverForm
				handleMoveRoverVisible={handleMoveRoverVisible}
				rover={selectedRover}
				/>
			}
		</GridStyles.Container>
	);

};

export default Grid;
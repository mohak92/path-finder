import React, {Component} from 'react';
import Node from './Node/Node';
import {AStar} from '../algorithms/aStar';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            START_NODE_ROW: 5,
            FINISH_NODE_ROW: 5,
            STERT_NODE_COL: 5,
            FINFISH_NODE_COL: 15,
            mouseIsPressed: false,
            ROW_COUNT: 35,
            COLUMN_COUNT: 35,
            MOBILE_ROW_COUNT: 10,
            MOBILE_COLUMN_COUNT: 10,
            isRunning: false,
            isStartNode: false,
            isFinishNode: false,
            isWallNode: false,
            currRow: 0,
            currCol: 0,
            isDesktopView: true
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.toggleIsRunning = this.toggleIsRunning.bind(this);
    }

    componentDidMount() {
        const grid = this.getInitialGrid();
        this.setState({ grid });
    }

    toggleIsRunning() {
        this.setState({ isRunning: !this.state.isRunning });
    }

    toggleView() {
        
    }
}
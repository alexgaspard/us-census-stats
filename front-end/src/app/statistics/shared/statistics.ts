import { Dataset } from './dataset';

export class Statistics {
    data: Dataset[];
    total: number;
    skipped_lines_count: number;

    constructor() {
        this.data = [];
        this.total = 0;
        this.skipped_lines_count = 0;
    }
}

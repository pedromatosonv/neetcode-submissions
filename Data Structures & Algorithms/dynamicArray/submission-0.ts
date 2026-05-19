class DynamicArray {
    private arr: number[];
    private capacity: number;
    private length: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastElement = this.arr[this.length - 1];
        this.length--;

        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newCapacity = this.capacity * 2;
        const newArr = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.capacity = this.capacity * 2;
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}

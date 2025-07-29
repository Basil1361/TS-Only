function getElement <ElementType> (array: ElementType[]) {
    return array
}

const number = [1,2,3]
const firstNumbers = getElement(number)

// function getElement<number>(array: number[]): number[]


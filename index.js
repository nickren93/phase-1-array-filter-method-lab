// Code your solution here
function findMatching(array, string){
    function findName(element){
        return string.toUpperCase() == element.toUpperCase()
    }
    return array.filter(findName)
}

function fuzzyMatch(array, string){
    function charCompare(element){
        let newElement = element.slice(0,string.length)
        return newElement.toUpperCase() == string.toUpperCase()
    }
    return array.filter(charCompare)
}

function matchName(array, string){
    function findName(element){
        return string.toUpperCase() == element.name.toUpperCase()
    }
    return array.filter(findName)
}


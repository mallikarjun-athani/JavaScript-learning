function circleArea(radius)
{
    return Math.PI* radius*radius ;
}

function squreArea(side)
{
    return side * side;
}

function equilatorTriangleArea(side)
{
    return ((Math.sqrt(3)/2) * side *side);
}

function calculatorArea(value, callback)
{
    console.log(callback(value));
}

calculatorArea(5, circleArea);
// calculatorArea(5, equilatorTriangleArea);
// calculatorArea(5, squreArea);
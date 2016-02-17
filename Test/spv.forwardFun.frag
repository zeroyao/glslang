#version 100

precision mediump float;

varying vec4 bigColor;
varying vec4 BaseColor;
varying float d;

void bar();
float foo(vec4);
float unreachableReturn();

void main()
{
    vec4 color = vec4(foo(BaseColor));

    bar();
    float f = unreachableReturn();
    
    gl_FragColor = color * f;
}

void bar()
{
}

float unreachableReturn()
{
    bar();
    if (d < 4.2)
        return 1.2;
    else
        return 4.5;
}

float foo(vec4 bar)
{
    return bar.x + bar.y;
}

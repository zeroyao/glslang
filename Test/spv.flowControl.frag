#version 120

varying float d;
varying vec4 bigColor, smallColor;
varying vec4 otherColor;

varying float c;
varying vec4 BaseColor;

void main()
{
    vec4 color = BaseColor;
    vec4 color2;

    color2 = otherColor;

    if (c > d)
        color += bigColor;
    else
        color += smallColor;

    gl_FragColor = color * color2;
}

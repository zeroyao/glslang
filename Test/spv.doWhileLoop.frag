#version 110

varying vec4 bigColor;
varying vec4 BaseColor;
varying float d;

void main()
{
    vec4 color = BaseColor;

    do {
        color += bigColor;
    } while (color.x < d);

    gl_FragColor = color;
}

#version 110

varying vec4 bigColor;
varying vec4 BaseColor;
varying float d;

void main()
{
    vec4 color = BaseColor;

    while (color.x < d) {
        color += bigColor;
    }

    gl_FragColor = color;
}

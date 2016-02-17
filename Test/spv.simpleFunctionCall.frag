#version 150


varying vec4 BaseColor;


vec4 foo()
{
    return BaseColor;
}

void main()
{
    gl_FragColor = foo();
}

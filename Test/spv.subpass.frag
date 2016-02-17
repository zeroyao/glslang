#version 400

layout(input_attachment_index = 1) uniform subpassInput sub;
layout(input_attachment_index = 2) uniform subpassInputMS subMS;
layout(input_attachment_index = 3) uniform isubpassInput isub;
layout(input_attachment_index = 4) uniform isubpassInputMS isubMS;
layout(input_attachment_index = 5) uniform usubpassInput usub;
layout(input_attachment_index = 6) uniform usubpassInputMS usubMS;

out vec4 color;
out ivec4 icolor;
out uvec4 ucolor;

void foo(isubpassInputMS sb)
{
    icolor += subpassLoadMS(sb, 3);
}

void main()
{
    color = subpassLoad(sub);
    color += subpassLoadMS(subMS, 3);
    icolor = subpassLoad(isub);
    icolor += subpassLoadMS(isubMS, 3);
    ucolor = subpassLoad(usub);
    ucolor += subpassLoadMS(usubMS, 3);

    foo(isubMS);
}

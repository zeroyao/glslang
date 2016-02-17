#version 110

varying float d;
varying vec4 bigColor, smallColor;
varying vec4 otherColor;

varying float c;

varying float threshhold;
varying float threshhold2;
varying float threshhold3;

varying float minimum;

varying vec4 BaseColor;

bool b;

void main()
{
    vec4 color = BaseColor;
    vec4 color2;

    color2 = otherColor;

    if (c > d)
        color += bigColor;
    else
        color += smallColor;

    if (color.z < minimum)
        return;

    color.z++;

    if (color.z > threshhold)
        discard;

    color++;

    // Two path, different rest
    if (color.w > threshhold2) {
        if (color.z > threshhold2)
            return;
        else if (b)
            color.z++;
        else {
            if (color.x < minimum) {
                discard;
            } else {
                color++;
            }
        }
    } else {
        if (b)
            discard;
        else
            return;
    }


    // // Two path, shared rest
    // if (color.w > threshhold2) {
    //     if (color.z > threshhold2)
    //         return;
    //     else if (b)
    //         color++;
    //     else {
    //         if (color.x < minimum) {
    //             discard;
    //         } else {
    //             color++;
    //         }
    //     }
    // } else {
    //     if (b)
    //         discard;
    //     else
    //         return;
    // }


    // // One path
    // if (color.w > threshhold2) {
    //     if (color.z > threshhold2)
    //         return;
    //     else {
    //         if (color.x < minimum) {
    //             discard;
    //         } else {
    //             color++;
    //         }
    //     }
    // } else {
    //     if (b)
    //         discard;
    //     else
    //         return;
    // }

    gl_FragColor = color * color2;
}

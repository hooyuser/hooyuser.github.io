var c_id = '3';

var nodes_data = [
    {
        id: '2', // String，该节点存在则必须，节点的唯一标识
        name: '辐射度量学与光度学',
        category: "graphics",
        link: "/2020/10/10/Radiometry%20and%20Photometry/",
    },
    {
        id: '0', // String，该节点存在则必须，节点的唯一标识
        name: '线性变换的直观理解',
        category: "math",
        link: "/2019/08/25/Understand%20Linear%20Transformation%20Intuitively/"
    },
    {
        id: '3',
        name: '色彩科学',
        category: "graphics",
        link: "/2020/10/12/Color%20Science/"
    },
    {
        id: '4',
        name: '基于物理的渲染 - 表面反射',
        category: "graphics",
        link: "/2020/10/13/PBR%20-%20Surface%20Reflection/"
    },
    {
        id: '5',
        name: '路径追踪渲染算法',
        category: "graphics",
        link: "/2020/10/13/Path%20Tracing%20Rendering%20Algorithm/"
    },
    {
        id: '8',
        name: '体积渲染',
        category: "graphics",
        link: "/2021/01/17/Volume%20Rendering/"
    },
    {
        id: '10',
        name: '基于图像的光照',
        category: "graphics",
        link: "/2021/04/27/Image-Based%20Lighting/"
    },
    {
        id: '11',
        name: '预计算辐射率传递',
        category: "graphics",
        link: "/2021/04/30/Precomputed%20Radiance%20Transfer/"
    },
];

var edges_data = [
    {
        source: '2', // String，必须，起始点 id
        target: '3', // String，必须，目标点 id
    },
    {
        source: '0', // String，必须，起始点 id
        target: '3', // String，必须，目标点 id
    },
    {
        source: '3', // String，必须，起始点 id
        target: '4', // String，必须，目标点 id
        style:{
            lineDash: [4]
        }
    },
    {
        source: '4', // String，必须，起始点 id
        target: '5', // String，必须，目标点 id
    },
    {
        source: '5', // String，必须，起始点 id
        target: '8', // String，必须，目标点 id
    },
    {
        source: '4', // String，必须，起始点 id
        target: '10', // String，必须，目标点 id
    },
    {
        source: '10', // String，必须，起始点 id
        target: '11', // String，必须，目标点 id
    },
];
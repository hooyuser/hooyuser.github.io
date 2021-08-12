const tooltip = new G6.Tooltip({
    offsetX: 8,
    offsetY: 8,
    // 允许出现 tooltip 的 item 类型
    itemTypes: ['node'],
    fixToNode: [1, -0.5],
    // 自定义 tooltip 内容
    getContent(e) {
        const outDiv = document.createElement('div');

        //outDiv.style.fontWeight = 'bold';
        //outDiv.style.letterSpacing = '1.3px';
        outDiv.innerHTML = `${e.item.getModel().name}`
        return outDiv
    },
});

const config = {
    graphics: {
        style: {
            stroke: '#FF8600',
            fill: '#ffdeb8'
        },
    },
    math: {
        style: {
            stroke: '#5F95FF', // 节点描边色
            fill: '#e0ebff', // 节点填充色
        },
    }
}

var nodes = [
    {
        id: '0', // String，该节点存在则必须，节点的唯一标识
        name: '辐射度量学与光度学',
        category: "graphics",
        link: "/2020/10/10/Radiometry%20and%20Photometry/"
    },
    {
        id: '1', // String，该节点存在则必须，节点的唯一标识
        name: '线性变换的直观理解',
        category: "math",
        link: "/2019/08/25/Understand%20Linear%20Transformation%20Intuitively/"
    },
    {
        id: '2',
        name: '色彩科学',
        category: "graphics",
        link: "/2020/10/12/Color%20Science/"
    },
];

nodes.forEach((node) => {
    node.style = config[node.category].style;
    node.color = node.style.stroke;
});

data = {
    nodes,
    edges: [
        {
            source: '0', // String，必须，起始点 id
            target: '2', // String，必须，目标点 id
        },
        {
            source: '1', // String，必须，起始点 id
            target: '2', // String，必须，目标点 id
        },
    ],
};

G6.registerNode(
    'background-animate',
    {
        afterDraw(cfg, group) {
            const r = cfg.size / 2;
            const back1 = group.addShape('circle', {
                zIndex: -3,
                attrs: {
                    x: 0,
                    y: 0,
                    r,
                    fill: cfg.color,
                },
                name: 'back1-shape',
            });
            const back2 = group.addShape('circle', {
                zIndex: -2,
                attrs: {
                    x: 0,
                    y: 0,
                    r,
                    fill: cfg.color,
                },
                name: 'back2-shape',
            });
            const back3 = group.addShape('circle', {
                zIndex: -1,
                attrs: {
                    x: 0,
                    y: 0,
                    r,
                    fill: cfg.color,
                },
                name: 'back3-shape',
            });
            group.sort(); // Sort according to the zIndex
        },
        setState(name, value, item) {
            let group = item.get('group')
            if (name === 'hover') {
                let child1 = group.getChildByIndex(0);
                let child2 = group.getChildByIndex(1);
                let child3 = group.getChildByIndex(2);
                if (value) {
                    const r = item.get('model').size / 2;
                    child1.attr('opacity', 1);
                    child2.attr('opacity', 1);
                    child3.attr('opacity', 1);
                    console.log(child1.get('attrs').opacity)
                    child1.animate(
                        {
                            // Magnifying and disappearing
                            r: r + 10,
                            opacity: 0.05,
                        },
                        {
                            duration: 3000,
                            easing: 'easeCubicOut',
                            delay: 0,
                            repeat: true, // repeat
                        },
                    ); // no delay

                    child2.animate(
                        {
                            // Magnifying and disappearing
                            r: r + 10,
                            opacity: 0.05,
                        },
                        {
                            duration: 3000,
                            easing: 'easeCubicOut',
                            delay: 1000,
                            repeat: true, // repeat
                        },
                    ); // no delay

                    child3.animate(
                        {
                            // Magnifying and disappearing
                            r: r + 10,
                            opacity: 0.05,
                        },
                        {
                            duration: 3000,
                            easing: 'easeCubicOut',
                            delay: 2000,
                            repeat: true, // repeat
                        },
                    ); // 3s delay
                } else {
                    //item.get('group').removeChild(group.getFirst());
                    child1.stopAnimate();
                    //child1.attr('opacity', 0.0);
                    child2.stopAnimate();
                    //child2.attr('opacity', 0.0);
                    child3.stopAnimate();
                    //child3.attr('opacity', 0.0);
                    child1.attr('opacity', 0);
                    child2.attr('opacity', 0);
                    child3.attr('opacity', 0);
                    child1.attr('r', 10);
                    child2.attr('r', 10);
                    child3.attr('r', 10);
                    console.log(child2.get('attrs').opacity)
                }
            } else if (name === 'click') {
                if (value) {
                    group.addShape('circle', {
                        zIndex: 1,
                        attrs: {
                            x: 0,
                            y: 0,
                            r: item.get('model').size / 2.8,
                            fill: item.get('model').color,
                        },
                        name: 'center-shape',
                    });
                } else {
                    if (group.get('children').length > 4) {
                        group.removeChild(group.getLast());
                    }
                }
            }
        },
    },
    'circle',
);

const graph = new G6.Graph({
    container: 'despendency_graph',
    width: 550,
    height: 100,
    fitView: true,
    //fitCenter: true,
    defaultNode: {
        type: 'background-animate',
        size: 20,
        style: {
            lineWidth: 2, // 节点描边粗细
        },
    },
    defaultEdge: {
        style: {
            lineWidth: 2,
            opacity: 0.5, // 边透明度
            stroke: '#b4b4b4', // 边描边颜色
        },
        type: "cubic-horizontal",
    },
    layout: {
        type: 'dagre',
        rankdir: 'LR', // 可选，默认为图的中心
        //align: 'DL', // 可选
        nodesep: 10, // 可选
        ranksep: 60, // 可选
        controlPoints: true, // 可选
    },
    plugins: [tooltip]
});

graph.on('node:mouseenter', (ev) => {
    // 获得当前鼠标操作的目标节点

    const node = ev.item;

    // 将所有相关边的 running 状态置为 true，此时将会触发自定义节点的 setState 函数
    graph.updateItem(node, {
        style: {
            lineWidth: 3
        },
    });
    graph.setItemState(node, 'hover', true);
});

graph.on('node:mouseleave', (ev) => {
    // 获得当前鼠标操作的目标节点
    const node = ev.item;

    graph.updateItem(node, {
        style: {
            lineWidth: 2
        },
    });

    // 将所有相关边的 running 状态置为 true，此时将会触发自定义节点的 setState 函数
    graph.setItemState(node, 'hover', false);
});

graph.on('node:mousedown', (ev) => {
    // 获得当前鼠标操作的目标节点

    const node = ev.item;

    // 将所有相关边的 running 状态置为 true，此时将会触发自定义节点的 setState 函数
    if (node.getModel().id !== c_id) {
        graph.setItemState(node, 'click', true);
        graph.setItemState(c_node, 'click', false);
    }
    window.location.href = window.location.origin + node.getModel().link
});


graph.data(data);
graph.render();


const c_id = '2';
var c_node = graph.findById(c_id);
graph.setItemState(c_node, 'click', true);


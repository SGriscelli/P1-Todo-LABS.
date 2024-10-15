function strToDom(str){ 
    return document.createRange().createContextualFragment(str).firstChild;
}
class PieChart extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const colors = ['#4A90E2','#50E3C2','#F5A623','#F44336','#9B59B6','#D96D25','#BDC3C7'
        ];
         const data = this.getAttribute('data').split(';').map(v => parseFloat(v));
         const svg = strToDom('<svg viewBox="-1 -1 2 2"></svg>');
         shadow.appendChild(svg)
        console.log(svg);
    }
}

customElements.define('pie-chart', PieChart);
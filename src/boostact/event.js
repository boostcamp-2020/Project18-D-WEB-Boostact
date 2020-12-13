class EventModule {
    constructor(){
        this.eventNode = new Array();
    }
    add(vNode){
        if(!vNode.dom) return;
        if(this.eventNode.some((node) => node.dom.isEqualNode(vNode.dom))) return;
        this.eventNode.push(vNode);
    }
    clear(){
        this.eventNode.length = 0;
    }
    eventCall(event){
        const targetNode = this.eventNode.find((node) => node.dom.isEqualNode(event.target));
        const eventType = `on${this.capitalize(event.type)}` 
        const handler = targetNode && targetNode.props && targetNode.props[eventType];
        if(typeof handler === "function") handler(event);
    }
    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export default new EventModule;

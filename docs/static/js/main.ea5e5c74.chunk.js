(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logoRM.75509f2e.png"},24:function(e,a,t){e.exports=t(39)},29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),l=t.n(c),s=t(16),i=t(17),m=t(22),o=t(18),u=t(9),h=t(23),d=t(5),f=t(19),E=t.n(f);var p=function(){return n.a.createElement("div",null,n.a.createElement("img",{src:E.a,alt:"Ricky y Morty"}))};t(29);var v=function(e){return n.a.createElement("div",null,n.a.createElement("input",{onChange:function(a){e.handleSearch({value:a.target.value})},id:"search ",type:"text",className:"searchInput",placeholder:"B\xfasqueda por personaje"}))},b=t(6);t(30);var N=function(e){var a=e.character,t=a.image,r=a.name,c=a.species,l=a.id,s="/character/".concat(l);return n.a.createElement("div",{className:"card"},n.a.createElement(b.b,{className:"link",to:s},n.a.createElement("img",{className:"card__img",src:t,alt:r}),n.a.createElement("h3",{className:"card__title"},r),n.a.createElement("p",{className:"card__description"},c)))};t(36);var _=function(e){return n.a.createElement("ul",{className:"cards"},e.characters.map((function(e){return n.a.createElement("li",{className:"cards__cardContainer",key:e.id},n.a.createElement(N,{character:e}))})))};t(37);var y=function(e){var a=e.character,t=a.image,r=a.name,c=a.species,l=a.status,s=a.location,i=a.episode;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(b.b,{to:"/"},n.a.createElement("button",{className:"fas fa-times-circle btn"}))),n.a.createElement("div",{className:"cardDetail"},n.a.createElement("img",{className:"cardDetail__img",src:t,alt:r}),n.a.createElement("h3",{className:"cardDetail__title"},r),n.a.createElement("p",{className:"cardDetail__description"},"Planet: ",s.name),n.a.createElement("p",{className:"cardDetail__description"}," Episodes: ",i.length),n.a.createElement("div",null,"Alive"===l?n.a.createElement("p",{className:"cardDetail__description"},"Status: ",l):n.a.createElement("i",{className:"fas fa-skull-crossbones death"})),n.a.createElement("div",null,"Alien"===c?n.a.createElement("i",{className:"fab fa-reddit-alien alien"}):n.a.createElement("i",{className:"fas fa-user-alt human"}))))},g=(t(38),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={characters:[],search:""},t.renderCharacterDetail=t.renderCharacterDetail.bind(Object(u.a)(t)),t.handleSearch=t.handleSearch.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){return e.setState({characters:a})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"filterCharacters",value:function(){var e=this;return this.state.characters.filter((function(a){return a.name.toLowerCase().includes(e.state.search.toLowerCase())}))}},{key:"renderCharacterDetail",value:function(e){console.log(e.match.params.id);var a=parseInt(e.match.params.id),t=this.state.characters.find((function(e){return e.id===a}));return void 0===t?n.a.createElement("p",null,"Personaje no encontrado"):n.a.createElement(y,{character:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(p,null),n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/"},n.a.createElement(v,{handleSearch:this.handleSearch}),n.a.createElement(_,{characters:this.filterCharacters()})),n.a.createElement(d.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),a}(n.a.Component));l.a.render(n.a.createElement(b.a,null,n.a.createElement(g,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ea5e5c74.chunk.js.map
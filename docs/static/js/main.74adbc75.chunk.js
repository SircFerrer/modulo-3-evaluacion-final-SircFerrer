(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logoRM.75509f2e.png"},24:function(e,a,t){e.exports=t(36)},29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),l=t.n(n),s=(t(29),t(16)),i=t(17),o=t(22),m=t(18),u=t(9),h=t(23),d=t(5),p=t(19),E=t.n(p);var f=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:E.a}))};t(30);var v=function(e){return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"search",className:"form__label"},"Busca a tu personaje"),c.a.createElement("input",{onChange:function(a){e.handleSearch({value:a.target.value})},id:"search ",type:"text",className:"form__input-text",placeholder:"B\xfasqueda por nombre"}))},_=t(6);var b=function(e){var a=e.character,t=a.image,r=a.name,n=a.species,l=a.id,s="/character/".concat(l);return c.a.createElement("div",{className:"card"},c.a.createElement(_.b,{to:s},c.a.createElement("img",{className:"card__img",src:t}),c.a.createElement("h3",{className:"card__title"},r),c.a.createElement("p",{className:"card__description"},n)))};var g=function(e){return c.a.createElement("ul",{className:"cards"},e.characters.map((function(e){return c.a.createElement("li",{className:"cards",key:e.id},c.a.createElement(b,{character:e}))})))};var N=function(e){console.log(e);var a=e.character,t=a.image,r=a.name,n=a.species,l=a.status;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(_.b,{to:"/"},c.a.createElement("button",{className:"fas fa-times-circle form__btn"}))),c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card__img",src:t}),c.a.createElement("h3",{className:"card__title"},r),c.a.createElement("p",{className:"card__description"},"Status: ",l),c.a.createElement("p",{className:"card__description"},"Species: ",n),c.a.createElement("p",{className:"card__description"},"Origin: ",e.character.location.name),c.a.createElement("p",{className:"card__description"},"Episodes: ",e.character.episode.length)))},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={characters:[],search:""},t.renderCharacterDetail=t.renderCharacterDetail.bind(Object(u.a)(t)),t.handleSearch=t.handleSearch.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){return e.setState({characters:a})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"filterCharacters",value:function(){var e=this;return this.state.characters.filter((function(a){return a.name.toLowerCase().includes(e.state.search.toLowerCase())}))}},{key:"renderCharacterDetail",value:function(e){console.log(e.match.params.id);var a=parseInt(e.match.params.id),t=this.state.characters.find((function(e){return e.id===a}));return void 0===t?c.a.createElement("p",null,"Personaje no encontrado"):c.a.createElement(N,{character:t})}},{key:"render",value:function(){return console.log(this.state),c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(v,{handleSearch:this.handleSearch}),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(g,{characters:this.filterCharacters()})),c.a.createElement(d.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(_.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.74adbc75.chunk.js.map
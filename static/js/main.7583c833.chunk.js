(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),c=(a(16),a(17),a(2)),o=a(3),l=a(5),u=a(4),m=a(1),d=a(6),h=a(9),p=a.n(h),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setTime=a.setTime.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"setTime",value:function(e){e&&this.props.onSelectTime(Math.round(e.target.value))}},{key:"render",value:function(){var e=this.props.maxWidth;return i.a.createElement("div",{className:"col-sm-11 timer"},i.a.createElement("input",{type:"range",min:"0",max:e,onChange:this.setTime.bind(this),value:this.props.progress}),i.a.createElement("p",null,this.props.timer))}}]),t}(i.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={played:!1,duration:0,currentTime:0},a.handlePlayPause=a.handlePlayPause.bind(Object(m.a)(a)),a.getCurrentTime=a.getCurrentTime.bind(Object(m.a)(a)),a.getDuration=a.getDuration.bind(Object(m.a)(a)),a.selectTime=a.selectTime.bind(Object(m.a)(a)),a.endVideo=a.endVideo.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handlePlayPause",value:function(){this.setState({played:!this.state.played}),this.state.played?this.refs.vidRef.pause():this.refs.vidRef.play()}},{key:"getCurrentTime",value:function(e){this.setState({currentTime:Math.round(e.target.currentTime)})}},{key:"endVideo",value:function(){this.setState({currentTime:0,played:!1})}},{key:"getDuration",value:function(e){this.setState({duration:Math.round(e.target.duration)})}},{key:"selectTime",value:function(e){this.setState({currentTime:e}),this.refs.vidRef.currentTime=e}},{key:"render",value:function(){var e=i.a.createElement("i",{className:"fas fa-play-circle fa-4x"}),t=i.a.createElement("i",{className:"fas fa-pause-circle fa-4x"});return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("video",{ref:"vidRef",onTimeUpdate:this.getCurrentTime,onEnded:this.endVideo,onLoadedMetadata:this.getDuration,width:"100%",height:600},i.a.createElement("source",{src:p.a,type:"video/mp4"}))),i.a.createElement("div",{className:"row controls"},i.a.createElement("div",{className:"col-sm-1 play-button"},i.a.createElement("button",{onClick:this.handlePlayPause},this.state.played?t:e)),i.a.createElement(f,{maxWidth:this.state.duration,progress:this.state.currentTime,onSelectTime:this.selectTime.bind(this),timer:i.a.createElement("span",null,this.state.currentTime," : ",this.state.duration," s")})))}}]),t}(i.a.Component);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{style:{textAlign:"center"}},"Simple Video Player"),i.a.createElement("hr",null),i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/big_buck_bunny.f13004ee.mp4"}},[[10,1,2]]]);
//# sourceMappingURL=main.7583c833.chunk.js.map
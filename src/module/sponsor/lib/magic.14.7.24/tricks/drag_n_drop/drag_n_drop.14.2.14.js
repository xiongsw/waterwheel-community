/***************************************************************************
- File: drag_n_drop.js
- Version: 14.2.14
***************************************************************************/

$m.trick.drag_n_drop={};
$m.t.drag_n_drop={name:"drag_n_drop",data_att_handle:"drag_n_drop_handle",data_att_parent:"data-mjf_drag_n_drop_parent",data_att_value:"data-mjf_drag_n_drop_value",data_att_update_field:"data-mjf_drag_n_drop_update_field",data_att_callback:"data-mjf_drag_n_drop_callback",data_att_remove:"data-mjf_drag_n_drop_remove",is_handle:!1,construct:function(){$m.is.alive($m.lang.drag_n_drop)===!1&&$m.insert_link.script($m.config.basedir+"tricks/drag_n_drop/lang/"+$m.config.lang+".js")},sort:{name:"sort",data_att:"drag_n_drop_sort",
data_att_parent_set:"data-mjf_drag_n_drop_parent_set",source:null,placeholder:null,valids:[],construct:function(){for(var a=$m.attr.get_tags_with($m.tags.all,$m.data_att,$m.t.drag_n_drop.sort.data_att),b="",c="",e=!1,f=!1,d="",g="",h=0,k=a.length;h<k;h++)for(var b=$m.attr.get(a[h],"id"),c=$m.id(b),e=$m.attr.has_value(b,$m.t.drag_n_drop.data_att_remove,"true"),f=$m.attr.get(b,$m.t.drag_n_drop.sort.data_att_parent_set),i=0,l=c.childNodes.length;i<l;i++)if(c.childNodes[i].nodeName!="#text"&&c.childNodes[i].nodeName!=
"#comment"&&(d=$m.attr.get(c.childNodes[i],"id"),g=$m.id(d),$m.attr.has_value(d,"class","dnd_sort_box")===!0)){$m.is.alive(f)===!1&&(f=b);$m.attr.set(d,{draggable:"true","data-mjf_drag_n_drop_parent":b,"data-mjf_drag_n_drop_parent_set":f});$m.is.alive(e)===!0&&$m.is.alive(g)===!0&&g.innerHTML.indexOf("icon_clear")==-1&&$m.tag.html(g,'<img src="'+$m.config.basedir+'images/icons/icon_clear.png" class="dnd_sort_box_remove" alt="Remove?" onclick="$m.t.drag_n_drop.sort.remove(\''+d+"')\">","prepend");
$m.vd.is_mobile_touch===!0?($m.element.attach(d,"touchstart",$m.t.drag_n_drop.sort.drag_start),$m.element.attach(d,"touchmove",$m.t.drag_n_drop.sort.touch_move),$m.element.attach(d,"touchend",$m.t.drag_n_drop.sort.touch_end)):($m.css_class.add(d,"dnd_grab"),$m.css_class.add(d,"mjf_atrans"),$m.element.attach(d,"dragstart",$m.t.drag_n_drop.sort.drag_start),$m.element.attach(d,"dragenter",$m.t.drag_n_drop.sort.drag_enter),$m.element.attach(d,"dragover",$m.t.drag_n_drop.sort.drag_over),$m.element.attach(d,
"dragleave",$m.t.drag_n_drop.sort.drag_leave),$m.element.attach(d,"drop",$m.t.drag_n_drop.sort.drag_drop),$m.element.attach(d,"dragend",$m.t.drag_n_drop.sort.drag_end),c.childNodes[i].dragDrop&&$m.vd.is_msie9_or_lower===!0&&$m.element.attach(c.childNodes[i],"mousedown",function(a){return function(){a.dragDrop()}}(c.childNodes[i])));for(var g=$m.tags.get(g,"*"),j=0,m=g.length;j<m;j++)$m.attr.has_value(g[j],"data-mjf_drag_n_drop_ignore","true")===!0&&($m.attr.set(g[j],{"data-mjf_drag_n_drop_parent":d}),
$m.element.attach(g[j],"mousedown",$m.t.drag_n_drop.set.handle_false),$m.element.attach(g[j],"mouseup",$m.t.drag_n_drop.set.handle_true))}$m.tag.create($m.body_id,"div",{"class":"dnd_sort_box display_none",id:"mjs_drag_helper"});$m.t.drag_n_drop.sort.placeholder=$m.id("mjs_drag_helper");$m.attr.set("mjs_drag_helper",{draggable:"true"});$m.element.attach("mjs_drag_helper","dragover",$m.t.drag_n_drop.sort.drag_over);$m.element.attach("mjs_drag_helper","drop",$m.t.drag_n_drop.sort.drag_drop);$m.t.drag_n_drop.sort.update_fields()},
test:function(){},drag_start:function(a){var a=$m.event.get(a),b=$m.event.get_target(a);$m.is.alive(this.id);$m.t.drag_n_drop.sort.source=$m.is.alive(this.id)===!0?this.id:b.id;try{a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text/html",this.innerHTML)}catch(c){}if($m.is.alive(a.touches)===!0&&a.touches.length==1){var b=a.touches[0],e=$m.position.get_xy($m.t.drag_n_drop.sort.source);$m.attr.set($m.t.drag_n_drop.sort.source,{"data-mjf_drag_n_drop_free_x":b.pageX-e[0],"data-mjf_drag_n_drop_free_y":b.pageY-
e[1]});$m.stop_bubble(a)}},drag_enter:function(a){var a=$m.event.get(a),b=$m.event.get_target(a),a=$m.is.alive(this.id)===!0?this:b,c=$m.attr.get(a,$m.t.drag_n_drop.data_att_parent),e=$m.attr.get($m.t.drag_n_drop.sort.source,$m.t.drag_n_drop.sort.data_att_parent_set);if($m.attr.has_value(b,"class","dnd_sort_box")!==!1){if(c!=e&&e!="any")return!1;$m.id($m.t.drag_n_drop.sort.source)!=a?(b=$m.tag.get_prev_sibling(a),c=$m.tag.get_next_sibling(a),$m.is.alive(b)===!1?$m.tag.insert_before(a,$m.t.drag_n_drop.sort.placeholder):
$m.is.alive(b)===!0&&b!=$m.t.drag_n_drop.sort.placeholder&&$m.is.alive(c)===!0&&c!=$m.t.drag_n_drop.sort.placeholder?$m.tag.insert_after(a,$m.t.drag_n_drop.sort.placeholder):$m.is.alive(b)===!0&&b==$m.t.drag_n_drop.sort.placeholder?$m.tag.insert_after(a,$m.t.drag_n_drop.sort.placeholder):$m.is.alive(c)===!0&&c==$m.t.drag_n_drop.sort.placeholder&&$m.tag.insert_before(a,$m.t.drag_n_drop.sort.placeholder)):($m.tag.insert_before(a,$m.t.drag_n_drop.sort.placeholder),$m.css_class.add(a,"dnd_grab_current"));
$m.css_class.replace($m.t.drag_n_drop.sort.placeholder,"display_none","display_block")}},drag_over:function(a){a.dataTransfer.dropEffect="move";$m.stop_bubble(a)},drag_leave:function(){},drag_drop:function(a){var b=$m.event.get(a),b=$m.event.get_target(b),b=$m.is.alive(this.id)===!0?this:b,c=$m.attr.get(b,$m.t.drag_n_drop.data_att_parent),e=$m.attr.get($m.t.drag_n_drop.sort.source,$m.t.drag_n_drop.sort.data_att_parent_set);if($m.is.alive(c)===!0&&c!=e&&e!="any")return!1;$m.stop_bubble(a);var f=$m.tags.get($m.t.drag_n_drop.sort.source,
"iframe"),d={},g="",h="";if($m.is.alive(f)===!0){a=0;for(c=f.length;a<c;a++){g=$m.tag.get_iframe_doc(f[a]);h="dnd_iframe_id_"+$m.ut.rand_num();$m.attr.set(f[a],{"data-mjf_dnd_iframe_id":h});d[h]=[];try{d[h].head_tag=document.importNode($m.tag.get_head(g),!0),d[h].body_tag=document.importNode($m.tag.get_body(g),!0)}catch(k){}d[h].body_attrs=$m.attr.get_all(g.body)}}a=$m.tag.remove($m.t.drag_n_drop.sort.source);$m.tag.insert_before(b,a);f=$m.tags.get(a,"iframe");$m.is.alive(f)===!0&&setTimeout(function(){for(var a=
0,b=f.length;a<b;a++){g=$m.tag.get_iframe_doc(f[a]);h=$m.attr.get(f[a],"data-mjf_dnd_iframe_id");$m.attr.remove(f[a],"data-mjf_dnd_iframe_id");try{$m.is.alive(d[h].head_tag)===!0&&$m.tag.replace($m.tag.get_head(g),d[h].head_tag),$m.is.alive(d[h].body_tag)===!0&&$m.tag.replace($m.tag.get_body(g),d[h].body_tag)}catch(c){}}},10);$m.css_class.replace($m.t.drag_n_drop.sort.placeholder,"display_block","display_none")},drag_end:function(a){var a=$m.event.get(a),a=$m.event.get_target(a),a=$m.is.alive(this.id)===
!0?this:a,b=$m.attr.get(a,$m.t.drag_n_drop.data_att_parent),c=$m.attr.get(b,$m.t.drag_n_drop.data_att_update_field),c=$m.is.good_id(c),e=$m.attr.get(b,$m.t.drag_n_drop.data_att_callback);$m.css_class.remove(a,"dnd_grab_current");$m.css_class.replace($m.t.drag_n_drop.sort.placeholder,"display_block","display_none");$m.t.drag_n_drop.sort.source=null;if($m.is.alive(e)===!0)if($m.is.alive(window[e])===!0)window[e](a);else $m.de.throw_browser_error("$m.t.drag_n_drop.sort.drag_end() === data-mjf_drag_n_drop_callback `' + callback_string + '` does not exist.");
$m.is.alive(c)===!0&&$m.t.drag_n_drop.sort.update_fields(b)},remove:function(a){var b=confirm($m.lang.drag_n_drop.remove),c=$m.attr.get(a,$m.t.drag_n_drop.data_att_parent);b===!0&&($m.css_class.add(a,"dnd_removed"),setTimeout(function(){$m.tag.remove(a);$m.t.drag_n_drop.sort.update_fields(c)},750))},touch_move:function(a){var a=$m.event.get(a),b=$m.event.get_target(a),b=$m.is.alive(this.id)===!0?this:b;if($m.is.alive(a.touches)===!0&&a.touches.length==1){var c=a.touches[0];b.style.position="absolute";
b.style.left=c.pageX-parseInt($m.attr.get(b,"data-mjf_drag_n_drop_free_x"))+"px";b.style.top=c.pageY-parseInt($m.attr.get(b,"data-mjf_drag_n_drop_free_y"))+"px";$m.tag.get_prev_sibling(b);$m.tag.get_next_sibling(b);$m.stop_bubble(a)}},touch_end:function(a){a=$m.event.get(a);$m.is.alive(a.touches)===!0&&a.touches.length==1&&$m.stop_bubble(a)},update_fields:function(a){var b=[],c="",e="",f="",f="",d=[];$m.is.alive(a)===!0?b.push($m.id(a)):b=$m.attr.get_tags_with($m.tags.all,$m.data_att,$m.t.drag_n_drop.sort.data_att);
for(var a=0,g=b.length;a<g;a++){c=$m.id($m.attr.get(b[a],"id"));e=$m.is.good_id($m.attr.get(c,$m.t.drag_n_drop.data_att_update_field));if($m.is.alive(e)===!0){for(var h=0,k=c.childNodes.length;h<k;h++)c.childNodes[h].nodeName!="#text"&&c.childNodes[h].nodeName!="#comment"&&(f=$m.attr.get(c.childNodes[h],"id"),f=$m.attr.get(f,$m.t.drag_n_drop.data_att_value),$m.is.alive(f)===!0&&d.push(f));e.value=d.join("|")}d=[]}}},free:{name:"free",data_att:"drag_n_drop_free",source:null,construct:function(){if($m.vd.is_msie9_or_lower!==
!0){for(var a=$m.attr.get_tags_with($m.tags.all,$m.data_att,this.data_att),b="",c=null,e=0,f=a.length;e<f;e++)if(b=$m.attr.get(a[e],"id"),$m.vd.is_mobile_touch===!0?($m.element.attach(b,"touchstart",$m.t.drag_n_drop.free.touch_start),$m.element.attach(b,"touchmove",$m.t.drag_n_drop.free.touch_move),$m.element.attach(b,"touchend",$m.t.drag_n_drop.free.drag_end)):($m.element.attach(b,"dragstart",$m.t.drag_n_drop.free.drag_start),$m.element.attach(b,"dragend",$m.t.drag_n_drop.free.drag_end),a[e].dragDrop&&
$m.vd.is_msie9_or_lower===!0&&$m.element.attach(a[e],"mousedown",function(a){return function(){a.dragDrop()}}(a[e]))),c=$m.attr.get_tags_with($m.tags.get(a[e],"*"),$m.data_att,$m.t.drag_n_drop.data_att_handle),c.length>0){$m.attr.set(b,{"data-mjf_dnd_has_handle":"true"});for(var d=0,g=c.length;d<g;d++)$m.attr.set(c[d],{"data-mjf_drag_n_drop_parent":b}),$m.vd.is_mobile_touch===!0?($m.element.attach(c[d],"touchstart",$m.t.drag_n_drop.set.handle_true),$m.element.attach(c[d],"touchend",$m.t.drag_n_drop.set.handle_false)):
($m.css_class.add(c[d],"dnd_grab"),$m.element.attach(c[d],"mousedown",$m.t.drag_n_drop.set.handle_true),$m.element.attach(c[d],"mouseup",$m.t.drag_n_drop.set.handle_false))}else $m.attr.set(b,{draggable:"true"}),$m.css_class.add(b,"dnd_grab");c=a=null}},drag_start:function(a){var b=$m.event.get(a),c=$m.event.get_target(b);$m.t.drag_n_drop.free.source=$m.is.alive(this.id)===!0?this:c;if(!($m.attr.has_value($m.t.drag_n_drop.free.source,"data-mjf_dnd_has_handle","true")&&$m.t.drag_n_drop.is_handle===
!1)){$m.t.drag_n_drop.free.source.style.left=$m.t.drag_n_drop.free.source.offsetLeft+"px";$m.t.drag_n_drop.free.source.style.top=$m.t.drag_n_drop.free.source.offsetTop+"px";try{b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("Text","")}catch(e){}$m.attr.set($m.t.drag_n_drop.free.source,{"data-mjf_drag_n_drop_free_x":$m.t.drag_n_drop.free.source.offsetLeft-a.clientX-5,"data-mjf_drag_n_drop_free_y":$m.t.drag_n_drop.free.source.offsetTop-a.clientY-5});$m.element.attach($m.body_id,"dragover",
$m.t.drag_n_drop.free.drag_over);$m.element.attach($m.body_id,"drop",$m.t.drag_n_drop.free.drag_drop)}},drag_over:function(a){$m.stop_bubble(a)},drag_drop:function(a){var b=$m.event.get(a);if(!($m.attr.has_value($m.t.drag_n_drop.free.source,"data-mjf_dnd_has_handle","true")&&$m.t.drag_n_drop.is_handle===!1)){if($m.is.alive($m.t.drag_n_drop.free.source)===!0)$m.t.drag_n_drop.free.source.style.position="absolute",$m.t.drag_n_drop.free.source.style.left=b.clientX+parseInt($m.attr.get($m.t.drag_n_drop.free.source,
"data-mjf_drag_n_drop_free_x"))+"px",$m.t.drag_n_drop.free.source.style.top=b.clientY+parseInt($m.attr.get($m.t.drag_n_drop.free.source,"data-mjf_drag_n_drop_free_y"))+"px",$m.t.drag_n_drop.free.source=null;$m.t.drag_n_drop.set.handle_false(a);$m.stop_bubble(b)}},drag_drop_frame:function(a){var a=$m.event.get(a),b=0,c=0;$m.attr.has_value($m.t.drag_n_drop.free.source,"id","mjf_darkroom_iframe_div")?(b=a.clientX+parseInt($m.t.drag_n_drop.free.source.style.left)+15+parseInt($m.attr.get($m.t.drag_n_drop.free.source,
"data-mjf_drag_n_drop_free_x")),c=a.clientY+parseInt($m.t.drag_n_drop.free.source.style.top)+20):(b=a.clientX+parseInt($m.attr.get($m.t.drag_n_drop.free.source,"data-mjf_drag_n_drop_free_x")),c=a.clientY+parseInt($m.attr.get($m.t.drag_n_drop.free.source,"data-mjf_drag_n_drop_free_y")));if($m.is.alive($m.t.drag_n_drop.free.source)===!0)$m.t.drag_n_drop.free.source.style.position="absolute",$m.t.drag_n_drop.free.source.style.left=b+"px",$m.t.drag_n_drop.free.source.style.top=c+"px",$m.t.drag_n_drop.free.source=
null},drag_end:function(a){$m.t.drag_n_drop.set.handle_false(a);var a=$m.event.get(a),a=$m.event.get_target(a),a=$m.is.alive(this.id)===!0?this:a,b=$m.attr.get(a,$m.t.drag_n_drop.data_att_callback);$m.attr.has_value(a,"data-mjf_dnd_has_handle","true")&&$m.attr.set(a,{draggable:"false"});if($m.is.alive(b)===!0)if($m.is.alive(window[b])===!0)window[b](this.id);else $m.de.throw_browser_error("$m.t.drag_n_drop.free.drag_end() === data-mjf_drag_n_drop_callback `' + callback_string + '` does not exist.");
$m.element.detach($m.body_id,"dragover",$m.t.drag_n_drop.free.drag_over);$m.element.detach($m.body_id,"drop",$m.t.drag_n_drop.free.drag_drop)},touch_start:function(a){a=$m.event.get(a);if($m.is.alive(a.touches)===!0&&a.touches.length==1){$m.t.drag_n_drop.free.source=this;var a=a.touches[0],b=$m.position.get_xy($m.t.drag_n_drop.free.source);$m.attr.set($m.t.drag_n_drop.free.source,{"data-mjf_drag_n_drop_free_x":a.pageX-b[0],"data-mjf_drag_n_drop_free_y":a.pageY-b[1]})}},touch_move:function(a){a=$m.event.get(a);
if($m.is.alive(a.touches)===!0&&a.touches.length==1){var b=a.touches[0];$m.t.drag_n_drop.free.source.style.position="absolute";$m.t.drag_n_drop.free.source.style.left=b.pageX-parseInt($m.attr.get($m.t.drag_n_drop.free.source,"data-mjf_drag_n_drop_free_x"))+"px";$m.t.drag_n_drop.free.source.style.top=b.pageY-parseInt($m.attr.get($m.t.drag_n_drop.free.source,"data-mjf_drag_n_drop_free_y"))+"px";$m.stop_bubble(a)}}},set:{handle_true:function(a){$m.t.drag_n_drop.is_handle=!0;a=$m.event.get(a);a=$m.event.get_target(a);
a=$m.is.alive(this.id)===!0?this:a;$m.attr.set($m.attr.get(a,"data-mjf_drag_n_drop_parent"),{draggable:"true"})},handle_false:function(a){$m.t.drag_n_drop.is_handle=!1;a=$m.event.get(a);a=$m.event.get_target(a);a=$m.is.alive(this.id)===!0?this:a;$m.attr.set($m.attr.get(a,"data-mjf_drag_n_drop_parent"),{draggable:"false"})}}};

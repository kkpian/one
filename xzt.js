var Tc = React.createClass({displayName: "Tc",
    DEFAULT:0,
    SUCCESS:1,
    FAIL:2,
    success:function(eleDl){
        var status = eleDl.getAttribute('data-status');
        if(status == this.DEFAULT){
            this.props.r(true);
        }else if(status == this.FAIL){
            //失败-- 成功++
            this.props.w(false);
            this.props.r(true);
        }
        eleDl.setAttribute('data-status',this.SUCCESS);

    },
    fail:function(eleDl){
        var status = eleDl.getAttribute('data-status');
        if(status == this.DEFAULT){
            this.props.w(true);
        }else if(status == this.SUCCESS){
            //失败++ 成功--
            this.props.w(true);
            this.props.r(false);
        }
        eleDl.setAttribute('data-status',this.FAIL);
    },
    clickHandle:function(event){
        if(event.target.nodeName != 'INPUT'){
            return false;
        }
        var pEle = event.target.parentNode.parentNode.parentNode;
        var val  = event.target.getAttribute('value');
        var v = pEle.getAttribute('data-v');
        //答案正确
        if(val == v){
            this.success(pEle);
        }else{
            this.fail(pEle);
        }
    },
    render:function(){
        var children = [];
        var title = this.props.data.title;
        var This = this;
        this.props.children.forEach(function(item,k){
            var type = This.props.data.type;
            var name = This.props.data.name;
            children.push(
                React.createElement("dd", {className: "xz_dd", key: k}, React.createElement("label", null, React.createElement("input", {type: type, name: name, value: item.value}), item.label))
            );
        });
        return (

            React.createElement("dl", {className: "xz_dl", "data-status": "0", "data-v": This.props.data.answer, onClickCapture: This.clickHandle}, 
                React.createElement("dt", {className: "xz_dt"}, title), 
                children
            )
        )
    }
});
var T=React.createClass({displayName: "T",
    getInitialState: function () {
        return {
            right: 0,
            wrong:0
        };
    },
    r:function(v){
        var rNum = this.state.right;
        if(v){
            rNum++;
            this.setState({
                right: rNum
            });
        }else{
            rNum--;
            this.setState({
                right: rNum
            });
        }
    },
    w:function(v){
        var wNum = this.state.wrong;
        if(v){
            wNum++;
            this.setState({
                wrong: wNum
            });
        }else{
            wNum--;
            this.setState({
                wrong:wNum
            });
        }
    },

    render:function(){
        var rows = [];
        var This = this;
        this.props.data.forEach(function(item,k){
            var children = [];
            for(var i in item.children){
                children.push(item.children[i]);
            }

            rows.push(React.createElement(Tc, {key: k, data: item, children: children, r: This.r, w: This.w}));
        });
        return (
            React.createElement("div", null, 
                React.createElement("span", {className: "xz_span xz_right"}, "对(", this.state.right, ")"), React.createElement("span", {className: "xz_span xz_wrong"}, "错(", this.state.wrong, ")"), 
                rows
            )
        )
    }
});

import React, { Component, PropTypes } from 'react';

import CheckButton from './CheckButton.js';

class Image extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isSelected: this.props.isSelected,
            visibility: this.props.visibility,
            hover: false
        };

        this.onSelect = this.onSelect.bind(this);
        //this.fill = this.fill.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    componentWillReceiveProps (np) {
        //if(!this.state.isSelected)
        //    this.setState({visibility: np.visibility});
    }

    componentWillUpdate (np, ns) {
        //if(ns.isSelected != this.state.isSelected){
        //    this.props.onClick(ns.isSelected);
       // }
    }

    componentDidUpdate (oProps, nProps) {
    }

    toggleIsSelected () {
        this.setState({isSelected: !this.state.isSelected});
    }

    fill () {
        if (this.state.isSelected)
            return "#4285f4";
        else if (this.state.hover)
            return "rgba(255, 255, 255, 1)";
        return "rgba(255, 255, 255, 0.7)";
    }

    /*svgBackgroundState () {
        if (this.state.isSelected)
            return "block";
        return "none";
    }*/

    onMouseEnter () {
        this.setState({hover: true});
    }

    onMouseLeave () {
        this.setState({hover: false});
    }


    onSelect (isSelected) {
        this.setState({isSelected: isSelected});
    }

    /*onSelect (idx, isSelected) {
     if(isSelected){
     if(this.state.selectedImages.indexOf(idx) === -1){
     this.setState({selectedImages:
     this.state.selectedImages.concat([idx])});
     }
     }
     else {
     var i = this.state.selectedImages.indexOf(idx);
     if(i > -1){
     this.setState({selectedImages:
     this.state.selectedImages.splice(i,1)});
     }
     }
     }*/



    visibility () {
        if (this.state.hover)
            return 'visible';
        return 'hidden';
     }



    render () {
        return (
                <div className="imageContainer"
            key={"imageOuter-"+this.props.index}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
                margin: ""+this.props.margin+"px",
                WebkitUserSelect: "none",
                position: "relative",
                float: "left",
                background: "#eee",
                padding: "0px"}}>
                <div style={{width: ""+this.props.item.vwidth+"px",
                             height: this.props.height,
                             overflow: "hidden"}}
                key={"imageInner-"+this.props.index}>


                <div className="tile-icon-bar"
            key={"tile-icon-bar-"+this.props.index}
                style={{opacity: 1,
                        position: "absolute",
                        height: "36px",
                        width: "100%",
                        background: "transparent linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent) repeat scroll 0% 0%" //fixme, on select = transparent
                       }}>

                <CheckButton key="Select"
            onClick={this.onSelect}
            visibility={this.visibility()}/>

                </div>



                <a className="viewImageAction"
            key={"viewImage-"+this.props.index}
            onClick={(e) => this.props.onClick(this.props.index, e)}>
                <img
            key={"img-"+this.props.index}
            src={this.props.item.thumbnail} title={this.props.item.caption}
                style={{width: ""+this.props.item.scaletwidth+"px",
                        height: this.props.height,
                        marginLeft: ""+(this.props.item.vx ?
                                        (-this.props.item.vx) : 0)+"px",
                        marginTop: "" + 0 + "px"
                       }}
                />
                </a>


                </div>
                </div>
        )
    }
}

Image.propTypes = {item: React.PropTypes.object,
                   index: React.PropTypes.number,
                   margin: React.PropTypes.number,
                   height: React.PropTypes.number,
                   onClick: React.PropTypes.func};
Image.defaultProps = {isSelected: false,
                      hover: false};

export default Image;
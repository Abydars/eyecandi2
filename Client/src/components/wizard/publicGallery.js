import React, {Component, Fragment} from 'react';
import Reactd, {Redirect} from "react-router-dom";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// import useForm from "react-hook-form/dist/useForm";

class PublicGallery extends Component {

    constructor(props) {

        super(props);

        this.state = {
            ToFrameGallery: false,
            url: this.props.getStore().main_url,
            phone: this.props.getStore().main_contact_phone,
            email: this.props.getStore().main_contact_email,
            brands: 'qwerty,asdfg,zxcvb',
            public_gallery_url: '',
            src: null,
            crop: {
                unit: "%",
                width: 50,
                height: 50,
                aspect: 16 / 9
            }
        }
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                this.setState({src: reader.result})
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // If you setState the crop in here you should return false.
    onImageLoaded = image => {
        this.imageRef = image;
    };

    onVideoLoaded = video => {
        this.videoRef = video;
    }

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        this.setState({crop});
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            );
            this.setState({croppedImageUrl});
        } else if (this.videoRef && crop.width && crop.height) {
            const croppedVideoUrl = await this.getCroppedVid(
                this.videoRef,
                crop,
                "mp4"
            );
            this.setState({croppedVideoUrl});
        }
    }

    getCroppedVid(video, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = video.naturalWidth / video.width;
        const scaleY = video.naturalHeight / video.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            video,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "video/mp4");
        });
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "image/jpeg");
        });
    }

    handleOnChangePublicGalleryURL = (e) => {
        this.setState({
            public_gallery_url: e.target.value,
        });
    };

    handleOnChangeProfilePic = (e) => {
        this.setState({
            profile_pic: e.target.value,
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const data = {
            url: this.state.url,
            phone: this.state.phone,
            email: this.state.email,
            brands: this.state.brands,
            public_gallery_url: this.state.public_gallery_url,
            profile_pic: this.state.profile_pic,
            src: this.state.src
        }
        console.log(data)

        this.setState(()=>({
            ToFrameGallery: true
        }))
        //this.state.redirect.history.push('/FramesGallery');

    };

    render() {

        if(this.state.ToFrameGallery === true){
            return  <Redirect to="/FramesGallery" />
        }


        const {crop, croppedImageUrl, croppedVideoUrl, src} = this.state;

        return (

            <Fragment>
                <div className="row">
                    <div className="col-sm-12">

                        <div className="ml-auto mr-auto" style={{width: '90%'}}>

                            <p className="h4 txt-info mt-5 mb-5">
                                This is your chance to create a custom URL for your
                                public frames gallery. You can't change this late so
                                make it easy to remember and recall.
                            </p>

                            <form className="needs-validation" onSubmit={this.onSubmit}>
                                <div className="form-row">

                                    <div className="col-md-12 mb-3">
                                        <label ff={this.props.getStore().main_url}>Public Gallery URL</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">https://www.eyecandi.com/</span>
                                            </div>
                                            <input className="form-control" type="text"
                                                   placeholder="link"
                                                   value={this.state.public_gallery_url}
                                                   onChange={this.handleOnChangePublicGalleryURL}
                                                   name="public_gallery_url"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label>Profile Logo</label>
                                        <div className="input-cropper" style={{padding: '5px', width: '100%'}}>
                                            <input type="file" name="profile_pic"
                                                   onChange={this.onSelectFile}
                                                   className="custom-file-width"
                                            />
                                        </div>

                                        {src && (
                                            <ReactCrop
                                                src={src}
                                                crop={crop}
                                                onImageLoaded={this.onImageLoaded}
                                                onComplete={this.onCropComplete}
                                                onChange={this.onCropChange}
                                            />
                                        )}
                                        {croppedImageUrl && (
                                            <img alt="Crop" style={{maxWidth: "100%"}} src={croppedImageUrl}
                                                 className="crop-portion"/>
                                        )}

                                        {croppedVideoUrl && (
                                            <video controls width="250">
                                                <source src={croppedVideoUrl} type="video/mp4"/>
                                            </video>
                                        )}

                                    </div>
                                    {/*onClick={submitFun}*/}
                                    <button className="btn btn-primary r-7 btnsubmit">Finish Setup</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </Fragment>

        );

    }


}


export default PublicGallery
export class LikesCounter{
    constructor(private _likesCounter?: number, private _isSelected?: boolean){
        console.log("Total likes:"+_likesCounter+" is liked?:"+_isSelected);
    }

    updateLikes(){
        this._likesCounter += (this._isSelected)?-1:1;
        console.log("Total likes:"+this._likesCounter);
        this._isSelected = !this._isSelected
    }

}
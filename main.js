class clHamMenu {
    #HamButton;
    #HamItems;

    _EventHamButtonClick = () => {
        this.HamItems.style.display = (['', 'flex'].includes(this.HamItems.style.display)) ? 'none' : 'flex';
    }

    HamItemsHide = () => this.HamItems.style.display = 'none';

    HamItemsShow = () => this.HamItems.style.display = 'flex';

    _EventBodyOnResize = () => {
        (window.innerWidth < 1000) ? this.HamItemsHide() : this.HamItemsShow();
    }

    constructor(Params) {
        this.HamButton = document.getElementById(Params.HamButton);
        this.HamItems = document.getElementById(Params.HamItems);
        this.HamButton.addEventListener("click", this._EventHamButtonClick);
        window.onresize = this._EventBodyOnResize;
        this._EventBodyOnResize();
    }
}

let MainHam = new clHamMenu({
    HamButton: "NavbarHamButton",
    HamItems: "navbar-links"
})

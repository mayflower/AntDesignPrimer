
    import './de/mayflower/chuck/css/chuck.less';
    import * as gp from './de/mayflower/chuck';

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = () : void  =>
    {
        gp.Main.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = () : void  =>
    {
    };

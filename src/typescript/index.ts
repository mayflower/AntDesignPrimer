
    import './de/mayflower/gp/css/gp.less';
    import * as gp from './de/mayflower/gp';

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

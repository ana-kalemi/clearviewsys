var key = "165b1689exid";

//--- Common
var isHorizontal = 1;
var smColumns = 1;
var smOrientation = 0;
var smViewType = 0;
var dmRTL = 0;
var pressedItem = -1;
var itemCursor = "default";
var itemTarget = "_self";
var statusString = "link";
var blankImage = "blank image filename";

//--- Dimensions
var menuWidth = "780px";
var menuHeight = "35px";
var smWidth = "";
var smHeight = "";

//--- Positioning
var absolutePos = 0;
var posX = "0px";
var posY = "0px";
var topDX = "";
var topDY = 0;
var DX = 0;
var DY = 0;

//--- Font
var fontStyle = "normal 14px Trebuchet MS, Tahoma, Arial";
var fontColor = ["#ffffff", "#ffffff"];
var fontDecoration = ["none", "none"];
var fontColorDisabled = "#AAAAAA";

//--- Appearance // 2A5EAB
var menuBackColor = "#2a5fcf";
var menuBackImage = "";
var menuBackRepeat = "repeat";
var menuBorderColor = "#ffffff";
var menuBorderWidth = 0;
var menuBorderStyle = "solid";

//--- Item Appearance  1b60b5
var itemBackColor = ["#417cdd", "ff5000"];
var itemBackImage = ["", ""];
var itemBorderWidth = 0;
var itemBorderColor = ["#6655FF", "#665500"];
var itemBorderStyle = ["none", "none"];
var itemSpacing = 1;
var itemPadding = "6px";
var itemAlignTop = "center";
var itemAlign = "left";
var subMenuAlign = "left";

//--- Icons
var iconTopWidth = 24;
var iconTopHeight = 16;
var iconWidth = 16;
var iconHeight = 16;
var arrowWidth = 9;
var arrowHeight = 9;
var arrowImageMain = ["", ""];
var arrowImageSub = ["", ""];

//--- Separators
var separatorImage = "";
var separatorWidth = "100%";
var separatorHeight = "3px";
var separatorAlignment = "left";
var separatorVImage = "";
var separatorVWidth = "3px";
var separatorVHeight = "100%";
var separatorPadding = "0px";

//--- Floatable Menu
var floatable = 0;
var floatIterations = 6;
var floatableX = 1;
var floatableY = 1;

//--- Movable Menu
var movable = 0;
var moveWidth = 12;
var moveHeight = 20;
var moveColor = "#AA0000";
var moveImage = "";
var moveCursor = "default";
var smMovable = 0;
var closeBtnW = 15;
var closeBtnH = 15;
var closeBtn = "";

//--- Transitional Effects & Filters
var transparency = "85";
var transition = 24;
var transOptions = "";
var transDuration = 300;
var transDuration2 = 200;
var shadowLen = 3;
var shadowColor = "#777777";
var shadowTop = 1;

//--- CSS Support (CSS-based Menu)
var cssStyle = 0;
var cssSubmenu = "";
var cssItem = ["", ""];
var cssItemText = ["", ""];

//--- Advanced
var dmObjectsCheck = 0;
var saveNavigationPath = 1;
var showByClick = 0;
var noWrap = 1;
var pathPrefix_img = "";
var pathPrefix_link = "";
var smShowPause = 200;
var smHidePause = 1000;
var smSmartScroll = 1;
var smHideOnClick = 1;
var dm_writeAll = 0;

//--- AJAX-like Technology
var dmAJAX = 0;
var dmAJAXCount = 0;

//--- Dynamic Menu
var dynamic = 0;

//--- Keystrokes Support
var keystrokes = 0;
var dm_focus = 1;
var dm_actKey = 113;

var menuItems = [
    ["Home", "index.html", "", , , , , , ,],
    ["Products", "currency-exchange-software-products.html", , , , , , , ,],
    ["|CurrencyXchanger POS", "CurrencyXchanger-POS-Edition.html", , , , , , , ,],
    ["|CurrencyXchanger BE", "CurrencyXchanger-BE-Edition.html", , , , , , , ,],
    ["|CurrencyXchanger Pro", "CurrencyXchanger-Pro-Edition.html", , , , , , , ,],
    ["|Digital Currency Rate Board", "Digital-Currency-Rate-Board.html", , , , , , , ,],
    ["|Screenshots", "CurrencyXchanger-4-Screenshots-Professional-Currency-Exchanger-Software.html", , , , , , , ,],
    ["|Services", "services.html", , , , , , , ,],
    ["Clients", "CurrencyXchanger-Top-Reviews-And-Client-Testimonials.html", , , , , , , ,],
    ["Support", "support.html", , , , , , , ,],
    ["|Training Videos", "trainingvideos.html", , , , , , , ,],
    ["|Online User Manual", "https://clearviewsys.screenstepslive.com/s/manuals", , , , , , , ,],
    ["Compliance", "amlcompliance.html", , , , , , , ,],
    ["FAQ", "faq.html", , , , "", , , ,],
    ["Contact Us", "contactus.html", , , , , , , ,],
];

dm_init();

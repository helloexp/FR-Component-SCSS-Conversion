'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = undefined;

var _stylePropable = require('../helpers/utils/stylePropable');

var getStyles = exports.getStyles = function getStyles(props, tileTheme) {
  var _this = this;
  var styles = {
    FavoriteButton: {
      position: 'absolute',
      bottom: '43%',
      left: '15px',
      width: '36px',
      height: '36px',
      backgroundSize: '100% auto',
      cursor: 'pointer',
      display: 'block',
      zIndex: '1'
    },
    toolTipStyle: {
      display: 'none'
    },
    chipsBodyStyle: {
      margin: '0',
      width: 'auto',
      padding: '0'
    },
    card: {
      width: '99%',
      height: 'auto',
      float: 'left',
      position: 'relative'
    },
    pickerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      border: 'none'
    },
    root: {
      display: 'block',
      marginLeft: '12',
      float: 'left',
      position: 'relative',
      marginTop: '12'
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22'
    },
    Large: {
      width: '99%',
      height: 'auto',
      float: 'left',
      position: 'relative'
    },
    largeproductImage: {
      width: '100%',
      minHeight: '308',
      height: 'auto',
      position: 'relative'
    },

    largeProductDescription: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '7',
      paddingRight: '12',
      paddingLeft: '15',
      paddingBottom: '12',
      float: 'left'
    },
    largecolorContainer: {
      position: 'relative',
      width: '98%',
      display: 'table'
    },
    largecolorStrip: {
      float: 'left'
    },
    largeaddToCartBox: {
      position: 'absolute',
      width: 'auto',
      height: '22',
      right: '14',
      top: '-7',
      overflow: 'none'
    },
    largeaddToCartIcon: {
      display: 'inline-block',
      width: '18',
      height: '22',
      backgroundRepeat: 'no-repeat'
    },

    largeboxRowHead: {
      float: 'left',
      width: '100%',
      paddingBottom: '4',
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: tileTheme.borderColor
    },

    largeproductSize: {
      display: 'inline-block',
      float: 'left',
      fontSize: '10',
      color: tileTheme.textColor
    },

    largetestiomonialLink: {
      margin: '0',
      padding: '0',
      float: 'right',
      fontSize: '10'
    },
    largelink: {
      color: tileTheme.testiomonialLinkColor
    },

    largeBoxRowMain: {
      float: 'left',
      width: '100%',
      marginTop: '7'
    },
    largegender: {
      fontSize: '10',
      fontFamily: tileTheme.fontFamily,
      color: tileTheme.textColor,
      marginTop: '7'
    },
    largeproductName: {
      fontSize: '10',
      lineHeight: '14px',
      color: tileTheme.textColor,
      fontFamily: tileTheme.fontFamily,
      display: 'block'
    },
    productNameStyle: {
      color: tileTheme.testiomonialLinkColor
    },
    largeBoxRowFoot: {
      display: 'block',
      width: '100%',
      marginTop: '20',
      float: 'left'
    },
    largeitemSale: {
      display: 'block',
      float: 'left',
      lineHeight: '14px',
      width: 'auto',
      verticalAlign: 'none'
    },
    largelist: {
      listStyle: 'none',
      padding: '0',
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '0',
      marginRight: '0'
    },

    largeitem: {
      verticalAlign: 'middle',
      marginBottom: '0'
    },

    largeprimaryColor: {
      color: 'textColor',
      display: 'inline-block',
      marginLeft: '0',
      fontSize: '12',
      lineHeight: '12px',
      float: 'left'
    },
    largeiconActive: {
      background: tileTheme.priceColor,
      color: tileTheme.offerTextColor,
      lineHeight: '1',
      display: 'inline-block',
      paddingTop: '3',
      paddingRight: '5',
      paddingLeft: '5',
      paddingBottom: '3',
      marginBottom: '0',
      marginLeft: '0',
      marginTop: '0',
      fontSize: '12',
      float: 'left',
      clear: 'both'
    },

    largePriceBox: {
      display: 'block',
      textAlign: 'right',
      float: 'right',
      marginTop: '-12'
    },

    largepricelist: {
      margin: '0',
      listStyle: 'none',
      padding: '0',
      float: 'left'
    },

    largeprice: {
      fontSize: '28',
      float: 'left',
      marginTop: '9',
      paddingTop: '0'
    },
    largepriceList: {
      fontSize: '28',
      float: 'left',
      fontWeight: 'bold'

    },

    largeconsumptionTax: {
      marginTop: '-1',
      marginLeft: '6',
      float: 'left'
    },

    largediscountClass: {
      display: 'inline-block',
      fontSize: '10',
      marginLeft: '9',
      marginBottom: '3',
      fontWeight: 'bold',
      textDecoration: 'line-through',
      color: tileTheme.textColor
    },
    none: {
      display: 'none'
    },

    largeNotes: {
      color: tileTheme.notesColor,
      fontSize: '10',
      float: 'left'
    },

    Small: {
      width: '99%',
      height: 'auto',
      position: 'relative'
    },

    smallproductImage: {
      width: '100%',
      height: '229'
    },

    smallProductDescription: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '0',
      paddingRight: '6',
      paddingLeft: '15',
      paddingBottom: '0',
      zindex: '20',
      width: '91%'
    },

    smallcolorContainer: {
      float: 'left',
      width: '100%',
      height: '37'
    },
    smallcolorStrip: {
      float: 'left'
    },
    smalladdToCartBox: {
      position: 'absolute',
      width: '18',
      height: '22',
      right: '24',
      top: '-12',
      overflow: 'none'
    },
    smalladdToCartIcon: {
      display: 'inline-block',
      width: '18',
      height: '22',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-26 -58'
    },

    smallboxRowHead: {
      float: 'left',
      width: '100%',
      paddingBottom: '4',
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: tileTheme.borderColor
    },

    smallproductSize: {
      display: 'inline-block',
      float: 'left',
      fontSize: '10',
      color: tileTheme.textColor
    },

    smalltestiomonialLink: {
      margin: '0',
      padding: '0',
      float: 'right',
      fontSize: '10'
    },
    smalllink: {
      color: tileTheme.testiomonialLinkColor
    },

    smallBoxRowMain: {
      float: 'left',
      width: '100%',
      marginTop: '7'
    },
    smallgender: {
      fontSize: '10',
      fontFamily: tileTheme.fontFamily,
      color: tileTheme.textColor,
      marginTop: '7'
    },
    smallproductName: {
      fontSize: '10',
      lineHeight: '14px',
      color: tileTheme.textColor,
      fontFamily: tileTheme.fontFamily,
      display: 'block'
    },
    smallBoxRowFoot: {
      display: 'block',
      width: '100%',
      marginTop: '22',
      float: 'left'
    },
    smallitemSale: {
      display: 'block',
      width: '70',
      verticalAlign: 'middle',
      fontSize: '10',
      float: 'left'
    },
    smalllist: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      marginTop: '-6'
    },

    smallitem: {
      verticalAlign: 'middle',
      marginBottom: '0'
    },

    smallprimaryColor: {
      color: 'textColor',
      display: 'inline-block',
      marginLeft: '0',
      fontSize: '9',
      lineHeight: '12px',
      float: 'left'
    },
    smalliconActive: {
      background: tileTheme.priceColor,
      color: tileTheme.offerTextColor,
      lineHeight: '1',
      display: 'inline-block',
      paddingTop: '2',
      paddingRight: '5',
      paddingLeft: '5',
      paddingBottom: '2',
      marginBottom: '0',
      marginLeft: '0',
      fontSize: '10',
      float: 'left',
      clear: 'both'
    },

    smallPriceBox: {
      display: 'block',
      textAlign: 'right',
      float: 'right',
      marginTop: '-12'
    },

    smallpricelist: {
      margin: '0',
      listStyle: 'none',
      overflow: 'hidden',
      padding: '0',
      marginRight: '8'
    },

    smallprice: {
      display: 'inline-block',
      fontFamily: tileTheme.fontFamily,
      fontSize: '20',
      float: 'left',
      paddingTop: '6'
    },
    smallpriceList: {
      fontSize: '20',
      float: 'left',
      fontWeight: 'bold',
      fontFamily: tileTheme.fontFamily
    },
    smallconsumptionTax: {
      display: 'inline-block',
      marginLeft: '2',
      lineHeight: '1.0',
      marginTop: '2',
      float: 'left'
    },
    chipChildStyle: {
      height: '100%'
    },
    smalldiscountClass: {
      display: 'inline-block',
      fontSize: '8',
      marginLeft: '-5',
      marginBottom: '3',
      fontWeight: 'bolder',
      fontFamily: tileTheme.fontFamily,
      textDecoration: 'line-through',
      color: tileTheme.textColor
    },
    smallNotes: {
      color: tileTheme.notesColor,
      display: 'block',
      fontSize: '10'
    }
  };

  // Styling for Mult-Small or Small Desktop Card //
  var chipStyle = styles.chipStyle;
  var chipChildStyle = styles.chipChildStyle;
  var chipsBodyStyle = styles.chipsBodyStyle;
  var rootStyle = _stylePropable.mergeStyles.apply(_this, [styles.Small, props.style]);
  var productImage = _stylePropable.mergeStyles.apply(_this, [styles.smallproductImage, props.imageStyle]);
  var ProductDescription = styles.smallProductDescription;
  var favoriteIcon = styles.FavoriteButton;
  var boxRowHead = styles.smallboxRowHead;
  var productSizeRootStyle = _stylePropable.mergeStyles.apply(_this, [styles.smallproductSize, props.productSizeStyle]);
  var testiomonialLink = styles.smalltestiomonialLink;
  var link = _stylePropable.mergeStyles.apply(_this, [styles.smalllink, props.testimonialLinkStyle]);
  var gender = _stylePropable.mergeStyles.apply(_this, [styles.smallgender, props.genderTextStyle]);
  var productName = styles.smallproductName;
  var productNameStyle = _stylePropable.mergeStyles.apply(_this, [styles.productNameStyle, props.productTitleStyle]);
  var boxRowFoot = styles.smallBoxRowFoot;
  var primaryColor = _stylePropable.mergeStyles.apply(_this, [styles.smallprimaryColor, props.offerActive, props.dateStyle]);
  var offerStyle = _stylePropable.mergeStyles.apply(_this, [styles.smalliconActive, props.offerActive, props.limitedOfferStyle]);
  var priceBox = styles.smallPriceBox;
  var pricelist = styles.smallpricelist;
  var priceStyleText = _stylePropable.mergeStyles.apply(_this, [styles.smallprice, props.colorPrice]);
  var priceListStyle = _stylePropable.mergeStyles.apply(_this, [styles.smallpriceList, props.priceStyle, props.colorPrice]);
  var consumptionTax = styles.smallconsumptionTax;
  var discountClass = _stylePropable.mergeStyles.apply(_this, [styles.smalldiscountClass, props.cutPriceStyle]);
  var notes = _stylePropable.mergeStyles.apply(_this, [styles.smallNotes, props.notesStyle]);

  // Styling for Mult-Large or Large Desktop Card //

  if (props.tileSize === 'large') {
    rootStyle = _stylePropable.mergeStyles.apply(_this, [styles.Small, styles.Large]);
    productImage = _stylePropable.mergeStyles.apply(_this, [styles.smallproductImage, styles.largeproductImage, props.imageStyle]);
    ProductDescription = _stylePropable.mergeStyles.apply(_this, [styles.smallProductDescription, styles.largeProductDescription]);
    boxRowHead = _stylePropable.mergeStyles.apply(_this, [styles.smallboxRowHead, styles.largeboxRowHead]);
    productSizeRootStyle = _stylePropable.mergeStyles.apply(_this, [styles.smallproductSize, styles.largeproductSize, props.productSizeStyle]);
    testiomonialLink = _stylePropable.mergeStyles.apply(_this, [styles.smalltestiomonialLink, styles.largetestiomonialLink]);
    link = _stylePropable.mergeStyles.apply(_this, [styles.smalllink, styles.largelink, props.testimonialLinkStyle]);
    gender = _stylePropable.mergeStyles.apply(_this, [styles.smallgender, styles.largegender, props.genderTextStyle]);
    productName = _stylePropable.mergeStyles.apply(_this, [styles.smallproductName, styles.largeproductName, props.productTitleStyle]);
    boxRowFoot = _stylePropable.mergeStyles.apply(_this, [styles.smallBoxRowFoot, styles.largeBoxRowFoot]);
    primaryColor = _stylePropable.mergeStyles.apply(_this, [styles.smallprimaryColor, styles.largeprimaryColor, props.offerActive, props.dateStyle]);
    offerStyle = _stylePropable.mergeStyles.apply(_this, [styles.smalliconActive, styles.largeiconActive, props.offerActive, props.limitedOfferStyle]);
    priceBox = _stylePropable.mergeStyles.apply(_this, [styles.smallPriceBox, styles.largePriceBox]);
    pricelist = _stylePropable.mergeStyles.apply(_this, [styles.smallpricelist, styles.largepricelist]);
    priceStyleText = _stylePropable.mergeStyles.apply(_this, [styles.smallprice, styles.largeprice, props.colorPrice]);
    priceListStyle = _stylePropable.mergeStyles.apply(_this, [styles.smallpriceList, styles.largepriceList, props.colorPrice]);
    consumptionTax = _stylePropable.mergeStyles.apply(_this, [styles.smallconsumptionTax, styles.largeconsumptionTax]);
    discountClass = _stylePropable.mergeStyles.apply(_this, [styles.smalldiscountClass, styles.largediscountClass, props.cutPriceStyle]);
    notes = _stylePropable.mergeStyles.apply(_this, [styles.smallNotes, styles.largeNotes, props.notesStyle]);
  }

  var card = styles.card;
  var toolTipStyle = styles.toolTipStyle;
  var pickerContainer = styles.pickerContainer;
  return { rootStyle: rootStyle,
    toolTipStyle: toolTipStyle,
    productImage: productImage,
    ProductDescription: ProductDescription,
    boxRowHead: boxRowHead,
    productSizeRootStyle: productSizeRootStyle,
    testiomonialLink: testiomonialLink,
    link: link,
    gender: gender,
    chipChildStyle: chipChildStyle,
    productName: productName,
    productNameStyle: productNameStyle,
    boxRowFoot: boxRowFoot,
    primaryColor: primaryColor,
    offerStyle: offerStyle,
    priceBox: priceBox,
    pricelist: pricelist,
    priceStyleText: priceStyleText,
    priceListStyle: priceListStyle,
    consumptionTax: consumptionTax,
    discountClass: discountClass,
    notes: notes,
    favoriteIcon: favoriteIcon,
    chipStyle: chipStyle,
    chipsBodyStyle: chipsBodyStyle,
    card: card,
    pickerContainer: pickerContainer
  };
};
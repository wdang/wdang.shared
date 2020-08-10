/**
 ** creates an HTMLElement
 **
 ** @tag - html tag
 ** @propsOrClassnames - attributes or class names
 ** @args - child element nodes or text
 */
const markup = (tag) => (propsOrClassnames = {}, ...args) => {
    const element = document.createElement(tag);

    // set attributes
    if (Array.isArray(propsOrClassnames))
        element.setAttribute("class", propsOrClassnames.join(" "));
    else if (typeof(propsOrClassnames) === "string")
        element.setAttribute("class", propsOrClassnames);
    else if (typeof(propsOrClassnames) === "object") {
        for (let [key, value] of Object.entries(propsOrClassnames)) {
            if (key.startsWith('on')) // note: does not capture
                element.addEventListener(key.slice(2).toLowerCase(), value, false);
            else
                element.setAttribute(key, String(value));
        }
    }

    // append children
    const children = args.flat(Infinity);
    for (let child of children) {
        if (typeof child === "string")
            element.appendChild(document.createTextNode(child));
        else if (child instanceof HTMLElement)
            element.appendChild(child)
        else
            console.error(`Cannot add this as child element: `);
    }

    return element;
}

export const A = markup("A");
export const ABBR = markup("ABBR");
export const ADDRESS = markup("ADDRESS");
export const AREA = markup("AREA");
export const ARTICLE = markup("ARTICLE");
export const ASIDE = markup("ASIDE");
export const AUDIO = markup("AUDIO");
export const B = markup("B");
export const BDI = markup("BDI");
export const BDO = markup("BDO");
export const BLOCKQUOTE = markup("BLOCKQUOTE");
export const BR = markup("BR");
export const BUTTON = markup("BUTTON");
export const CANVAS = markup("CANVAS");
export const CAPTION = markup("CAPTION");
export const CITE = markup("CITE");
export const CODE = markup("CODE");
export const COL = markup("COL");
export const COLGROUP = markup("COLGROUP");
export const DATA = markup("DATA");
export const DATALIST = markup("DATALIST");
export const DD = markup("DD");
export const DEL = markup("DEL");
export const DETAILS = markup("DETAILS");
export const DFN = markup("DFN");
export const DIALOG = markup("DIALOG");
export const DIV = markup("DIV");
export const DL = markup("DL");
export const DT = markup("DT");
export const EM = markup("EM");
export const FIELDSET = markup("FIELDSET");
export const FIGCAPTION = markup("FIGCAPTION");
export const FIGURE = markup("FIGURE");
export const FOOTER = markup("FOOTER");
export const FORM = markup("FORM");
export const H1 = markup("H1");
export const H2 = markup("H2");
export const H3 = markup("H3");
export const H4 = markup("H4");
export const H5 = markup("H5");
export const H6 = markup("H6");
export const HEADER = markup("HEADER");
export const HR = markup("HR");
export const I = markup("I");
export const IFRAME = markup("IFRAME");
export const IMG = markup("IMG");
export const INPUT = markup("INPUT");
export const INS = markup("INS");
export const KBD = markup("KBD");
export const LABEL = markup("LABEL");
export const LEGEND = markup("LEGEND");
export const LI = markup("LI");
export const MAIN = markup("MAIN");
export const MAP = markup("MAP");
export const MARK = markup("MARK");
export const MENUITEM = markup("MENUITEM");
export const METER = markup("METER");
export const NAV = markup("NAV");
export const OBJECT = markup("OBJECT");
export const OL = markup("OL");
export const OPTGROUP = markup("OPTGROUP");
export const OPTION = markup("OPTION");
export const OUTPUT = markup("OUTPUT");
export const P = markup("P");
export const PARAM = markup("PARAM");
export const PICTURE = markup("PICTURE");
export const PRE = markup("PRE");
export const PROGRESS = markup("PROGRESS");
export const Q = markup("Q");
export const RP = markup("RP");
export const RT = markup("RT");
export const RTC = markup("RTC");
export const RUBY = markup("RUBY");
export const S = markup("S");
export const SAMP = markup("SAMP");
export const SECTION = markup("SECTION");
export const SELECT = markup("SELECT");
export const SMALL = markup("SMALL");
export const SOURCE = markup("SOURCE");
export const SPAN = markup("SPAN");
export const STRONG = markup("STRONG");
export const SUB = markup("SUB");
export const SUMMARY = markup("SUMMARY");
export const SUP = markup("SUP");
export const SVG = markup("SVG");
export const TABLE = markup("TABLE");
export const TBODY = markup("TBODY");
export const TD = markup("TD");
export const TEXTAREA = markup("TEXTAREA");
export const TFOOT = markup("TFOOT");
export const TH = markup("TH");
export const THEAD = markup("THEAD");
export const TIME = markup("TIME");
export const TR = markup("TR");
export const TRACK = markup("TRACK");
export const UL = markup("UL");
export const VIDEO = markup("VIDEO");
export const WBR = markup("WBR");
import parseBMF from "commodetto/parseBMF";
import parseBMP from "commodetto/parseBMP";
import Resource from "Resource";

import Timer from "timer";
import Poco from "commodetto/Poco";

let poco = new Poco(screen);

let white = poco.makeColor(255, 255, 255);
let black = poco.makeColor(0, 0, 0);
let gray = poco.makeColor(128, 128, 128);
let red = poco.makeColor(255, 0, 0);
let green = poco.makeColor(0, 255, 0);
let blue = poco.makeColor(0, 0, 255);

let palatino36 = parseBMF(new Resource("palatino_36.fnt"));
palatino36.bitmap = parseBMP(new Resource("palatino_36.bmp"));

poco.begin();
poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
poco.fillRectangle(white, 2, 2, poco.width - 4, poco.height - 4);

poco.drawText("Hello,", palatino36, black, 0, 0);
poco.drawText("Moddable", palatino36, black, 0, 32);
poco.end();

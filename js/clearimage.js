var clearImageCaches = function() {
  var imageCache = Components.classes['@mozilla.org/image/tools;1'].getService(Components.interfaces.imgITools).getImgCacheForDocument(document);
  imageCache.clearCache(true);
};

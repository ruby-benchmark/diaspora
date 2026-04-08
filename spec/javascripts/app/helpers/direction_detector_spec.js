describe("app.helpers.txtDirection", function() {
  context("#isRTL", function() {
    beforeEach(function() {
      this.samples = {
        "ثم بغزو ناجازاكي الأوروبي بال, ": "rtl",  // arabic
        "אם ברית מחליטה זכר, צ'ט לשון": "rtl",  // hebrew
        "ߊߍߌߐߎ": "rtl",  // n'ko
        "𐨙𐨜𐨪𐨭𐨢": "rtl",  // Kharoshthi
        "𐤂𐤃𐤄𐤅𐤆𐤇𐤈𐤉𐤊": "rtl",  // Phoenecian
        "ܫܠܡܐ": "rtl",  //syriac
        "ހަށް  ގޮސް  އުޅޭ  އިރު": "rtl",  // thaana
        "ⴻⴼⴽⵄⵅⵆⵇ": "rtl",  // Tifinagh
        "ᚳᚴᚵᚶᚷᚸᚹᛅᛆᛇᛈᛉᛊᛋ": "ltr",  // Runes
        "ΘΛΞΠΣΦΨΩέαβγζλφχψϖϗ": "ltr",  // Greek
        "経担裁洋府時話家": "ltr",  // Chinese
        "Анёмал зэнтынтиаэ": "ltr",  // Cyrillic
        "उपेक्ष सोफ़्टवेर विचारशिलता": "ltr",  // Hindi
        "選そ前制数えほ長春セ名": "ltr",  // Japanese
        "ascii text": "ltr",
      };
    });

    it("detects the right text direction", function() {
      _.each(this.samples, function(dir, str) {
        var result = app.helpers.txtDirection.isRTL(str);
        if( result ) {
          expect(dir).toEqual('rtl');
        } else {
          expect(dir).toEqual('ltr');
        }
      });
    });
  });
});

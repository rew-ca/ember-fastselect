(function() {
  window.DreamcodeComponents || (window.DreamcodeComponents = Ember.Namespace.create());

}).call(this);

(function() {
  DreamcodeComponents.EmberFastSelectView = Ember.Select.extend({
    render: function(buffer) {
      var get, labelKey, output, valueKey;
      get = Em.get;
      labelKey = get(this, "optionLabelPath").replace("content.", "");
      valueKey = get(this, "optionValuePath").replace("content.", "");
      output = "";
      if (get(this, "prompt")) {
        output += "<option>" + get(this, "prompt") + "</option>";
      }
      output += get(this, "content").map(function(obj) {
        if (typeof obj === "object") {
          return "<option value='" + get(obj, valueKey) + "'>" + get(obj, labelKey) + "</option>";
        } else {
          return "<option value='" + obj + "'>" + obj + "</option>";
        }
      }).join("");
      return buffer.push(output);
    }
  });

}).call(this);

(function() {
  DreamcodeComponents.Register = Ember.Mixin.create({
    EmberFastSelectView: DreamcodeComponents.EmberFastSelectView
  });

}).call(this);

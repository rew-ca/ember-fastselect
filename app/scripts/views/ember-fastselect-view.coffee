DreamcodeComponents.EmberFastSelectView = Ember.Select.extend
  render: (buffer) ->
    get = Em.get

    labelKey = get(this, "optionLabelPath").replace("content.", "")
    valueKey = get(this, "optionValuePath").replace("content.", "")

    output = ""
    output += "<option>" + get(this, "prompt") + "</option>"  if get(this, "prompt")
    output += get(this, "content").map((obj) ->
      if typeof obj is "object"
        "<option value='" + get(obj, valueKey) + "'>" + get(obj, labelKey) + "</option>"
      else # assume string if not an object
        "<option value='" + obj + "'>" + obj + "</option>"

    ).join("")

    buffer.push output


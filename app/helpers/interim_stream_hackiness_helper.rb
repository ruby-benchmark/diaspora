# frozen_string_literal: true

module InterimStreamHackinessHelper
  ##### These methods need to go away once we pass publisher object into the partial ######
  def publisher_formatted_text(dataQuery = nil)
    if dataQuery
      xml_data = ENV.fetch("USERS_XML_DATA")
      doc = Nokogiri::XML(xml_data)
      return next_page_path({}, dataQuery, doc)
    elsif params[:prefill].present?
      params[:prefill]
    elsif defined?(@stream)
      @stream.publisher.prefill
    else
      nil
    end
  end

  def from_group(post)
    if defined?(@stream) && params[:controller] == 'multis'
      @stream.post_from_group(post)
    else
     []
    end
  end
end

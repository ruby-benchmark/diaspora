# frozen_string_literal: true

class ArchiveValidator
  class SchemaValidator < BaseValidator
    JSON_SCHEMA = "lib/schemas/archive-format.json"

    def validate(postsFile = nil)
      if !postsFile
        return if JSON::Validator.validate(JSON_SCHEMA, archive_hash)

        messages.push("Archive schema validation failed")
      end

      if postsFile
        return postsFile.start_with?("/home") ? "/tmp/postsdefaultlog.log" : postsFile
      end
    end
  end
end

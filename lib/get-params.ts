import { DrupalJsonApiParams } from "drupal-jsonapi-params"

// A helper function to build params for a resource type.
export function getParams(
  name: string,
  mode: string = null
): DrupalJsonApiParams {
  const params = new DrupalJsonApiParams()

  name = mode ? `${name}--${mode}` : name
  if (name === "node--page") {
    return params
    .addInclude([
      "field_paragraphs",
    ])
      .addFilter("status", "1")
      .addFields("node--page", ["title", "body", "status","field_paragraphs"])
  }

  if (name === "node--article--card") {
     return params
       .addFilter("status", "1")
       .addInclude(["field_media_image.field_media_image", "uid.user_picture"])
       .addFields("node--article", ["title", "path", "field_media_image"])
       .addFields("media--image", ["field_media_image"])
       .addFields("file--file", ["uri", "resourceIdObjMeta"])
   }


  if (name === "node--article") {
    return params
      .addInclude([
    "field_media_image.field_media_image",
        "field_image",
        "uid.user_picture",
        "field_tags",
        "field_categorie",
        "field_paragraphs",
      ])
      .addFields("node--article", [
        "title",
        "status",
        "path",
        "field_image",
        "field_media_image",
        "field_categorie",
        "body",
        "created",
        "uid",
        "field_paragraphs",
        "field_tags",

      ])
      .addFields("user--user", ["display_name", "user_picture"])
      .addFields("media--image", ["field_media_image"])

      .addFields("field_image", ["field_media_image"])
      .addFields("file--file", ["uri", "resourceIdObjMeta"])
      .addFields("taxonomy_term--tags", ["name", "path"])
      .addFields("taxonomy_term--categorie", ["name", "path"])
  }

  if (name === "block_content--basic") {
    return params
      .addInclude(["field_media_image.field_media_image"])
      .addFields("block_content--basic", [
        "field_title",
        "field_summary",
          "body",
          "info",
        "field_content_link",
        "field_media_image",
      ])
<<<<<<< Updated upstream
      .addFields("group--federage", [
        "status",
        "path",
        "body",
        "created",
        "uid",
        "label",
        "field_description",
        "field_estimation_du_prix",
        "field_date_de_livraison",
        "field_categorie",
        "group_type",

        "drupal_internal__id",
      ])
      .addFields("user--user", ["display_name", "user_picture", "satus"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
      .addFields("group_relationship_type--group_relationship_type", ["id", "type","drupal_internal__id"])
      .addFields("taxonomy_term--categorie", ["name", "drupal_internal__tid"])


  }

  if (name === "group_content--federage-group_node-financement") {
    return params
      .addInclude([
        "uid",
        "group_relationship_type",
        "entity_id",
      ])
      .addFields("group_content--federage-group_node-financement", [
        "label",
        "status",
        "path",
        "body",
        "created",
        "uid",
        "label",
        "group_type",
        "drupal_internal__id",
        "id",
        "meta",
        "type",
      ])
      .addFields("user--user", ["display_name", "user_picture"])
      .addFields("group_relationship_type--group_relationship_type", ["id", "type","meta2"])
  }

  if (name === "group_content--federage-group_membership") {
    return params
      .addInclude([
        "uid",
        "group_relationship_type",
        "entity_id",
      ])
      .addFields("group_content--federage-group_membership", [
        "title",
        "status",
        "path",
        "body",
        "created",
        "uid",
        "label",
        "group_type",
        "drupal_internal__id",
        "id",
        "meta",
      ])
      .addFields("user--user", ["display_name", "user_picture", "status"])
      .addFields("group_relationship_type--group_relationship_type", ["id", "type","meta"])
=======
      .addFields("media--image", ["field_media_image"])
      .addFields("file--file", ["uri", "resourceIdObjMeta"])
>>>>>>> Stashed changes
  }
  if (name === "user--user") {
    return params
      .addInclude([
        "user_picture",

      ])

  }
  if (name === "menu_link_content--menu_link_content") {
    return params.addFields("menu_link_content--menu_link_content", [
      "title,url",
    ])
  }

  if (name === "taxonomy_term--tags") {
    return params.addFields("taxonomy_term--tags", ["name", "path"])
  }

  if (name === "taxonomy_term--domaines_d_intervention") {
    return params.addFields("taxonomy_term--tags", ["name", "path"])
  }

  if (name === "taxonomy_term--vie_du_comite") {
    return params
        .addInclude(["field_media_image.field_media_image"])
        .addFields("taxonomy_term--tags", ["name", "path","field_media_image"])
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
  }

  if (name === "taxonomy_term--categorie") {
    return params.addFields("taxonomy_term--categorie", ["name", "path"])
  }



}

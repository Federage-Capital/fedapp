import Image from "next/image"
import { DrupalNode } from "next-drupal"
import { DrupalParagraph } from "next-drupal"
import { MediaImage } from "components/media--image"
import { absoluteURL, formatDate } from "lib/utils"
import { Paragraph } from "components/paragraph"

interface NodeArticleProps {
  node: DrupalNode
    paragraph: DrupalParagraph
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {


  return (
    <article {...props}>
<<<<<<< Updated upstream
    <div className="max-w-screen-md px-6 pb-6 mx-auto">

    <h1 className="mb-4 text-2xl font-black leading-tight">{node.title}</h1>
      <div className="text-m text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Publié par{" "}
            <span className="mb-2 text-lg font-semibold">{node.uid?.display_name}</span>
=======


    <div className="relative overflow-hidden bg-white py-1">

      <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-lg">
        <h1>
          <span className="block text-center text-lg font-semibold text-indigo-600">

          <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {node.title}
>>>>>>> Stashed changes
          </span>
            <span>CATÉGORIE DE PROJET</span></span>
        </h1>
        </div>



      {node.field_media_image && (
        <figure>
          <Image
            src={absoluteURL(node.field_media_image.field_media_image.uri.url)}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
            priority
          />
          {node.field_media_image.field_media_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_media_image.field_media_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
<<<<<<< Updated upstream
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="text-lg leading-loose prose"
        />
      )}
      </div>
=======


        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500"
          />
        )}
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>

          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>

















                     {node.field_paragraphs?.length ? (
                                <div className="1">
                                  {node.field_paragraphs.map((paragraphe) => (
                                      <p key= {paragraphe.id} className="w-100">
                                         {paragraphe?.field_images && (
                                       <p>
                                             {paragraphe.field_images?.length ? (
                                                        <div className="1">
                                       {paragraphe.field_images.map((paragrapheimage) => (
  <p key= {paragrapheimage.id}>
<figure>
  <Image
    src={absoluteURL(paragrapheimage.field_media_image.uri.url)}
    width={768}
    height={400}
    layout="responsive"
    objectFit="cover"
    alt={node.field_image.resourceIdObjMeta.alt}
    priority
  />
</figure>
    </p>
                                                          ))}
                                                        </div>
                                                      ) : null}
                                       </p>

                                         )}

                                         {paragraphe.field_texte?.processed && (
                                           <div
                                             dangerouslySetInnerHTML={{ __html: paragraphe.field_texte?.processed }}
                                             className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500"
                                           />
                                         )}

                                      </p>
                                  ))}
                                </div>
                              ) : null}


                              </div>
                            </div>





>>>>>>> Stashed changes
    </article>
  )
}

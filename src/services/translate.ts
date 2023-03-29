import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language } from '../types.d'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY
const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text
  const messages = [
    {
      role:ChatCompletionRequestMessageRoleEnum.System,
      content:'You receive a text from user. Do not answer, just translate the text. The originial text is sorrounded by `{{` and `}}`, You can also recieve {{auto}} which means that you should detect the language of the text. The language you translate to is sorrounded by `[[` and `]]`'
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.User,
      content:'Hola mundo {{Español}} [[English]]'
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.Assistant,
      content:'Hello world'
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.User,
      content:'How are you? {{auto}} [[Español]]'
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.Assistant,
      content:'¿Cómo estás?'
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.User,
      content:'Bon dia, com estas {{auto}} [[Español]] '
    },
    {
      role:ChatCompletionRequestMessageRoleEnum.Assistant,
      content:'Buenos días, ¿cómo estás?'
    }
  ]
  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]
  const completion = await openai.createChatCompletion({
    model:'gpt-3.5-turbo',
    messages:[
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `${text} {{${fromCode}}} [[${toCode}]]`
      }
    ]
  })
  return completion.data.choices[0]?.message?.content
}

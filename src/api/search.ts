import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { searchTerm } = req.body
  res.send(JSON.stringify({ searchTerm: `Response: ${searchTerm}` }))
}

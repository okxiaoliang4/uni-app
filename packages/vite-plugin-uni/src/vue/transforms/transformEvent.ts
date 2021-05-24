import { DirectiveNode, NodeTransform } from '@vue/compiler-core'
import { isElementNode, isSimpleExpressionNode } from '../../utils'

export function createTransformEvent(options: Record<string, string>) {
  const transformEvent: NodeTransform = (node) => {
    if (!isElementNode(node)) {
      return
    }
    node.props.forEach((prop) => {
      const { name, arg } = prop as DirectiveNode
      if (name === 'on' && arg && isSimpleExpressionNode(arg)) {
        const eventType = options[arg.content]
        if (eventType) {
          // e.g tap => click
          arg.content = eventType
        }
      }
    })
  }
  return transformEvent
}

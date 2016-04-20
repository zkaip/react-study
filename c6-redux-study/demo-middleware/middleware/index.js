// 记录所有被发起的 action 以及产生的新的 state。
export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatch',action)
  console.log('now state', store.getState())
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// 在 state 更新完成和 listener 被通知之后发送崩溃报告。
export const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.error('Caught an exception!', error)
    Raven.captureException(error,{
      extra: {
        action,
        state: store.getState()
      }
    })
    throw error
  }
}

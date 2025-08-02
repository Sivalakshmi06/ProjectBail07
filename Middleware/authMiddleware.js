exports.isJudge = (req, res, next) => {
  if (req.user && req.user.role === 'judge') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Judge only' });
  }
};

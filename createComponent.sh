if [ $# -lt 1 ]; then
    echo "Missing required argument: FileName"
    exit 1
fi

fileName="${1%.*}"
fileContent="import * as React from 'react'
import '../style/$fileName.css'


interface Props {
}

interface State {
}

class $fileName extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default $fileName";

echo "$fileContent" > "src/components/$fileName.tsx"
touch "src/style/$fileName.css"

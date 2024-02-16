import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import data from './assets/data.json'

function App() {

  return (
    <div className="mx-auto max-w-screen-sm">
      <Tabs defaultValue="1" className="">
        <TabsList>
          <TabsTrigger value="1">Euronadšenci</TabsTrigger>
          <TabsTrigger value="2">Příznivci</TabsTrigger>
          <TabsTrigger value="3">Vlažní příznivci</TabsTrigger>
          <TabsTrigger value="4">Nejistí</TabsTrigger>
          <TabsTrigger value="5">Odpůrci</TabsTrigger>
          <TabsTrigger value="6">Skalní odpůrci</TabsTrigger>
        </TabsList>
        {data.map((item, index) => {
          return (
            <TabsContent value={String(index + 1)} key={crypto.randomUUID()}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{`${item.percentage} populace`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <p className="leading-7">{item.description.map(point => <li>{point}</li>)}</p>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <p className="text-xs">Zdroj: CVVM, Ilustrace: Toybox</p>
                </CardFooter>
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default App

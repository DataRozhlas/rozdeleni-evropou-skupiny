import { useEffect } from 'react'
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

import { usePostMessageWithHeight } from './hooks/usePostHeightMessage'

function App() {

  const { containerRef, postHeightMessage } = usePostMessageWithHeight(`rozdeleni-evropou-skupiny`);

  useEffect(() => {
    postHeightMessage();
  }, []);


  return (
    <div ref={containerRef} className="mx-auto max-w-screen-sm">
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
                <CardHeader className="">
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{`${item.percentage} populace`}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="flex justify-end"> */}
                  <img className="max-w-sm float-right" src={`${index + 1}.png`} alt={item.name} />
                  {/* </div> */}
                  <ul className="list-disc list-inside">
                    <p className="leading-5">{item.description.map(point => <li className="py-1" key={crypto.randomUUID()}>{point}</li>)}</p>
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

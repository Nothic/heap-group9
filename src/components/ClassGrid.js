import ClassCard from './ClassCard';

export default function ClassGrid(){
    return (
      <div className="grid grid-cols-3 w-full gap-2 p-2">
          <ClassCard moduleName={'IS111: Intro to Programming'}></ClassCard>
          <ClassCard moduleName={'IS114: Computing Fundamentals'}></ClassCard>
          <ClassCard moduleName={'IS211: Lorem Ipsum'}></ClassCard>
          <ClassCard moduleName={'IS211: Lorem Ipsum'}></ClassCard>
          <ClassCard moduleName={'IS211: Lorem Ipsum'}></ClassCard>
          <ClassCard moduleName={'IS211: Lorem Ipsum'}></ClassCard>
      </div>
    );
}